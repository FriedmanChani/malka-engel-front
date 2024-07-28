import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import { useTranslation } from 'react-i18next';
import { GetProductsByCategory } from '../../axios/ProductAxios';
import { Box, Breadcrumbs, Card, CardContent, Container, Grid, IconButton, Link, Tooltip, Typography } from '@mui/material';
import WatermarkedImage from './productDetail/WatermarkedImage';
import { getCart, removeFromCart } from './cookies/SetCart';
import { GetCategoryByCategoryId } from '../../axios/CategoryAxios';

const ProductByCategory = () => {
    debugger
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language === 'en' ? 'En' : 'He';
    const { idCategory } = useParams();
    const navigate = useNavigate();
    const [cart, setCart] = useState(getCart());
    const [category, setCategory] = useState({name:"unknown"});
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            debugger
            const [productsResponse, categoryResponse] = await Promise.all([
                GetProductsByCategory(idCategory),
                GetCategoryByCategoryId(idCategory)
            ]);
            setCategory(categoryResponse);
            setProducts(productsResponse);
        } catch (error) {
            console.error("Error fetching products:", error);
            alert("An error occurred while fetching the products.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [idCategory]);

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
        setCart(getCart());
    };

    const handleAddToCart = (product) => {
        navigate(`/myProduct/${product.productID}`);
        // Add the product to cart here if needed
    };

    const breadcrumbs = [
        { name: 'Home Page', link: '/' },
        { name: category[`name${currentLanguage}`] }
    ];

    return (
        <Container sx={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            <Box textAlign="center" mb={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                {category[`name${currentLanguage}`]}
                </Typography>
                <Breadcrumbs aria-label="breadcrumb" sx={{ justifyContent: 'center' }}>
                    {breadcrumbs.map((crumb, index) => (
                        index < breadcrumbs.length - 1 ? (
                            <Link key={index} to={crumb.link} style={{ textDecoration: 'none', color: '#1976d2' }}>
                                {crumb.name}
                            </Link>
                        ) : (
                            <Typography key={index} color="text.primary">
                                {crumb.name}
                            </Typography>
                        )
                    ))}
                </Breadcrumbs>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    {loading ? (
                        <Box textAlign="center" mt={5}>
                            <Typography variant="h5">{t('productListPage.noProducts')}</Typography>
                            <Typography>{t('productListPage.technicalIssue')}</Typography>
                        </Box>
                    ) : (
                        <Grid container spacing={3}>
                            {products.map((product, index) => {
                                const productInCart = cart.find((item) => item.productID === product.productID);

                                return (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Card
                                            sx={{
                                                position: 'relative',
                                                border: '1px solid #ddd',
                                                borderRadius: '8px',
                                                transition: 'transform 0.2s, box-shadow 0.2s',
                                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                                ':hover': {
                                                    transform: 'scale(1.02)',
                                                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                                                }
                                            }}
                                        >
                                            <WatermarkedImage
                                                alt={product.name}
                                                onClick={() => navigate(`/myProduct/${product.productID}`)}
                                                sx={{
                                                    cursor: 'pointer',
                                                    transition: 'transform 0.3s',
                                                    ':hover': { transform: 'scale(1.1)' }
                                                }}
                                                imageUrl={`${process.env.REACT_APP_API_URL}${product.imageURL}`}
                                                watermarkText='malka engel'
                                                style={{
                                                    width: '100%',
                                                    height: '250px',
                                                    transition: 'transform 0.2s ease-out',
                                                    cursor: 'pointer'
                                                }}
                                            />
                                            <CardContent sx={{ padding: '16px' }}>
                                                <Typography variant="h6" component="div" gutterBottom>
                                                    {product.name}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="div">
                                                    {product.price} ₪
                                                </Typography>
                                                <Box mt={2} textAlign="center">
                                                    <Tooltip
                                                        title={
                                                            productInCart
                                                                ? t('הסר מסל')
                                                                : t('הוסף לסל')
                                                        }
                                                    >
                                                        <IconButton
                                                            color={productInCart ? 'secondary' : 'primary'}
                                                            onClick={() =>
                                                                productInCart
                                                                    ? handleRemoveFromCart(product.productID)
                                                                    : handleAddToCart(product)
                                                            }
                                                        >
                                                            {productInCart ? (
                                                                <RemoveShoppingCartIcon />
                                                            ) : (
                                                                <ShoppingCartIcon />
                                                            )}
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title={t('פרטים נוספים')}>
                                                        <IconButton
                                                            color="info"
                                                            onClick={() => navigate(`/myProduct/${product.productID}`)}
                                                            sx={{ mt: 1 }}
                                                        >
                                                            <InfoIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductByCategory;
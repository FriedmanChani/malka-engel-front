import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { getCart } from "../product/cookies/SetCart";
import { setCookie } from "../product/cookies/CookieUtils";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
  Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { OrderHistory } from "../Order/OrderHistory";

export const CartDisplay = () => {
  const [showHistory, setShowHistory] = useState(false);
  const navigate = useNavigate();
  const [cart, setCart] = useState(getCart());
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language === "en" ? "En" : "He";

  const handleRemove = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    setCookie("cart", JSON.stringify(newCart), 7);
  };

  const goToCheckout = () => {
    if (cart.length === 0) {
      alert(t('shoppingCartPage.emptyCartMessage'));
      return;
    }
    navigate('/myCheckout');
  };
  
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {t('shoppingCartPage.title')}
      </Typography>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <List>
          {cart.map((product, index) => (
            <ListItem key={index} divider sx={{ alignItems: 'center' }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={3}>
                  <img
                    src={`${product.imageURL}`}
                    alt={product[`name${currentLanguage}`]}
                    style={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ListItemText
                    primary={
                      <Button
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'black',
                          textDecoration: 'none',
                          cursor: 'pointer',
                          outline: 'none',
                          padding: 0
                        }}
                        onClick={() => navigate(`/myProduct/${product.productID}`)}
                      >
                        {product[`name${currentLanguage}`]}
                      </Button>
                    }
                    secondary={`${t('Price')}: ${product.price} ₪`}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleRemove(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
        <Grid container justifyContent="flex-end" sx={{ marginTop: '20px' }}>
                    <Box sx={{ mt: 4 }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setShowHistory(!showHistory)}
                    sx={{ mr: 2 }}
                >
                    {t('shoppingCartPage.viewOrderHistory')}
                </Button>
                {showHistory && <OrderHistory />}
            </Box>
            <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={goToCheckout}
                >
                    {t('shoppingCartPage.proceedToCheckout')}
                </Button>
            </Box>
        </Grid>
        <Box mt={2} />
      </Paper>
    </Container>
  );
};

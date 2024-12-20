import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from 'react-i18next';

const GoBackButton = () => {
  const navigate = useNavigate();
  const { t, i18next} = useTranslation();

  return (
    <Button
      variant="contained"
      startIcon={<ArrowBackIcon />}
      onClick={() => navigate(-1)}
      sx={{
        position: 'fixed',
        bottom: 20,
        left: 20,
        background: 'linear-gradient(45deg, #6a1b9a 30%, #26a69a 90%)', // Gradient from Purple to Teal
        color: '#ffffff',
        '&:hover': {
          background: 'linear-gradient(45deg, #4a148c 30%, #00796b 90%)', // Darker gradient
        },
        borderRadius: '8px',
        padding: '10px 20px',
      }}
    >
       {t('goBackPage.button')}
    </Button>
  );
};

export default GoBackButton;
  
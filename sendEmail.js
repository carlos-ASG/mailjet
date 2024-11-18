const sgMail = require('@sendgrid/mail');

// Configura tu API Key de SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);  // Sustituye con tu API Key de SendGrid

const htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h2 {
            text-align: center;
            color: #333333;
        }
        .product {
            display: flex;
            align-items: center;
            border-bottom: 1px solid #eeeeee;
            padding: 10px 0;
        }
        .product img {
            max-width: 80px;
            margin-right: 15px;
            border-radius: 8px;
        }
        .product-details {
            flex-grow: 1;
        }
        .product-name {
            font-size: 16px;
            color: #333333;
            margin: 0;
        }
        .button-container {
            text-align: center;
            margin-top: 20px;
        }
        .confirm-button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #28a745;
            color: #ffffff;
            text-decoration: none;
            font-size: 16px;
            border-radius: 5px;
        }
        .confirm-button:hover {
            background-color: #218838;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Carrito de Compras</h2>
        <div class="product">
            <img src="https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwb15fba18/images/product/7501055307043_B.jpg?sw=445&sh=445&sm=fit" alt="Coca Cola">
            <div class="product-details">
                <p class="product-name">Coca Cola</p>
            </div>
        </div>
        <div class="product">
            <img src="https://panoli.mx/cdn/shop/products/RE0053_761x.jpg?v=1600970424" alt="Fanta">
            <div class="product-details">
                <p class="product-name">Fanta</p>
            </div>
        </div>
        <div class="product">
            <img src="https://i5-mx.walmartimages.com/gr/images/product-images/img_large/00750101116765L.jpg" alt="Sabritas Clásicas">
            <div class="product-details">
                <p class="product-name">Sabritas Clásicas</p>
            </div>
        </div>
        <div class="product">
            <img src="https://cdn.shopify.com/s/files/1/0566/4391/1854/files/7501011115590_180923_76a693fe-2797-46a8-9586-6b5ed4801f57.webp?v=1695140523" alt="Sabritas Crema y Especias">
            <div class="product-details">
                <p class="product-name">Sabritas Crema y Especias</p>
            </div>
        </div>
        <div class="product">
            <img src="https://i5-mx.walmartimages.com/gr/images/product-images/img_large/00750303467211L.jpg?odnHeight=576&odnWidth=576&odnBg=FFFFFF" alt="Principe">
            <div class="product-details">
                <p class="product-name">Príncipe</p>
            </div>
        </div>
        <div class="product">
            <img src="https://i5-mx.walmartimages.com/gr/images/product-images/img_large/00750100063335L.jpg" alt="Galletas Marías">
            <div class="product-details">
                <p class="product-name">Galletas Marías</p>
            </div>
        </div>
        <div class="button-container">
            <a href="https://tu-pagina-de-confirmacion.com" class="confirm-button">Confirmar Compra</a>
        </div>
    </div>
</body>
</html>
`;

const msg = {
  to: 'sandovalcarlos09@gmail.com', // Correo del destinatario
  from: 'caalsandovalgu@ittepic.edu.mx', // Tu correo
  subject: 'Carrito de Compras',
  text: 'Hola, este es un resumen de tu carrito de compras.',
  html: htmlContent,
};

sgMail
  .send(msg)
  .then(() => {
    console.log('Correo enviado con éxito');
  })
  .catch((error) => {
    console.error('Error al enviar el correo:', error);
  });

import express from "express";
import morgan from 'morgan';
import { errorHandler, notFoundHandler } from "./middlewares/error.middleware";
import categoryRouter from './modules/category/category.routes';
import inventoryRouter from './modules/inventory/inventory.routes';
import productRouter from './modules/product/product.routes';
import logger from "./utils/logger";


const app=express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api/products',productRouter);
app.use('/api/category',categoryRouter);
app.use('/api/inventory',inventoryRouter);

app.use(notFoundHandler);
app.use(errorHandler);


const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    logger.info(`Server is running on http://localhost:${PORT}`);
})


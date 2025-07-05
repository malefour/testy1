import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for frontend integration
  const allowedOrigins = process.env.NODE_ENV === 'production' 
    ? [process.env.FRONTEND_URL || 'https://openticket.bolt.dev']
    : ['http://localhost:3000', 'http://localhost:3001'];
    
  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
  });
  
  const port = process.env.PORT || 3001;
  await app.listen(port, '0.0.0.0');
  console.log(`🚀 Backend server running on port ${port}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
}
bootstrap(); 
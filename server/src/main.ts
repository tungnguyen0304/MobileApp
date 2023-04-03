import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Tạo đối tượng DocumentBuilder
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API documentation for my NestJS app')
    .setVersion('1.0')
    .addTag('api')
    .build();

  // Tạo tài liệu API từ DocumentBuilder
  const document = SwaggerModule.createDocument(app, config);

  // Thiết lập các tùy chọn của Swagger UI
  const options = {
    explorer: true,
    swaggerOptions: {
      defaultModelsExpandDepth: -1,
    },
  };

  // Đăng ký tài liệu API và Swagger UI Express middleware
  SwaggerModule.setup('api', app, document, options);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
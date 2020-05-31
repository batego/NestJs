import { Test, TestingModule } from '@nestjs/testing';
import { MensajesController } from './mensajes.controller';

describe('Mensajes Controller', () => {
  let controller: MensajesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MensajesController],
    }).compile();

    controller = module.get<MensajesController>(MensajesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

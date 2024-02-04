@Module({
    imports: [
        TypeOrmModule.forFeature([CardEntity])
      ],

      controllers: [CardController],
      providers: [CardService],
      exports: [CardService],
})
export class CardModule{}
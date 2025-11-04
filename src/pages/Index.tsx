import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl">🎭</div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Мурляндия
                </h1>
                <p className="text-sm text-muted-foreground">Аниматорское агентство</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#about" className="hover:text-primary transition-colors font-medium">О нас</a>
              <a href="#costumes" className="hover:text-primary transition-colors font-medium">Костюмы</a>
              <a href="#shows" className="hover:text-primary transition-colors font-medium">Программы</a>
              <a href="#booking" className="hover:text-primary transition-colors font-medium">Бронирование</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Праздник для вашего ребёнка! 🎉
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto">
              Яркие костюмы, весёлые игры и незабываемые эмоции от профессиональных аниматоров
            </p>
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg hover-scale">
              <a href="#booking" className="flex items-center gap-2">
                Забронировать праздник
                <Icon name="PartyPopper" size={24} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Почему выбирают нас?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale border-2 hover:border-primary transition-all">
              <CardContent className="pt-6 text-center">
                <div className="text-6xl mb-4">⭐</div>
                <h3 className="text-xl font-bold mb-3">Опытные аниматоры</h3>
                <p className="text-muted-foreground">
                  Профессиональные артисты с опытом работы более 5 лет
                </p>
              </CardContent>
            </Card>
            <Card className="hover-scale border-2 hover:border-secondary transition-all">
              <CardContent className="pt-6 text-center">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-3">Яркие костюмы</h3>
                <p className="text-muted-foreground">
                  Более 50 костюмов любимых персонажей в отличном состоянии
                </p>
              </CardContent>
            </Card>
            <Card className="hover-scale border-2 hover:border-accent transition-all">
              <CardContent className="pt-6 text-center">
                <div className="text-6xl mb-4">🎈</div>
                <h3 className="text-xl font-bold mb-3">Интересные программы</h3>
                <p className="text-muted-foreground">
                  Индивидуальный подход и программы для любого возраста
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="costumes" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши костюмы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите любимого персонажа для вашего праздника
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Принцесса', emoji: '👸', color: 'from-pink-400 to-purple-400' },
              { name: 'Супергерой', emoji: '🦸', color: 'from-blue-400 to-cyan-400' },
              { name: 'Пират', emoji: '🏴‍☠️', color: 'from-yellow-400 to-orange-400' },
              { name: 'Фея', emoji: '🧚', color: 'from-green-400 to-teal-400' },
              { name: 'Клоун', emoji: '🤡', color: 'from-red-400 to-pink-400' },
              { name: 'Волшебник', emoji: '🧙', color: 'from-purple-400 to-indigo-400' },
              { name: 'Животные', emoji: '🐾', color: 'from-amber-400 to-yellow-400' },
              { name: 'Мульт-герои', emoji: '🎬', color: 'from-cyan-400 to-blue-400' },
            ].map((costume, idx) => (
              <Card key={idx} className="hover-scale cursor-pointer overflow-hidden group">
                <div className={`h-32 bg-gradient-to-br ${costume.color} flex items-center justify-center text-6xl group-hover:scale-110 transition-transform`}>
                  {costume.emoji}
                </div>
                <CardContent className="pt-4">
                  <h3 className="text-lg font-bold text-center">{costume.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="shows" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Шоу-программы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите программу по возрасту и интересам ребёнка
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-primary/20 hover:border-primary transition-all hover-scale">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4 text-center">🎪</div>
                <h3 className="text-2xl font-bold mb-2 text-center text-primary">Малышам (3-5 лет)</h3>
                <p className="text-center text-3xl font-bold mb-4">от 5000₽</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span>Игры и танцы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span>Мыльные пузыри</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span>Аквагрим</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span>Фотосессия</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground text-center">Длительность: 1 час</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary transition-all hover-scale transform md:scale-105">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4 text-center">⭐</div>
                <h3 className="text-2xl font-bold mb-2 text-center text-secondary">Школьникам (6-10 лет)</h3>
                <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold w-fit mx-auto mb-2">
                  ПОПУЛЯРНО
                </div>
                <p className="text-center text-3xl font-bold mb-4">от 7000₽</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span>Квесты и конкурсы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span>Научное шоу</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span>Фокусы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span>Дискотека</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span>Подарки</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground text-center">Длительность: 1.5 часа</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent transition-all hover-scale">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4 text-center">🎭</div>
                <h3 className="text-2xl font-bold mb-2 text-center text-accent">Подросткам (11-14 лет)</h3>
                <p className="text-center text-3xl font-bold mb-4">от 8000₽</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span>Тематические квесты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span>Интеллектуальные игры</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span>Спортивные конкурсы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={18} />
                    <span>Музыкальная программа</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground text-center">Длительность: 2 часа</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="booking" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-primary shadow-2xl">
              <CardContent className="pt-8">
                <h2 className="text-3xl font-bold text-center mb-2">Забронировать праздник</h2>
                <p className="text-center text-muted-foreground mb-8">
                  Заполните форму, и мы свяжемся с вами в течение часа
                </p>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Ваше имя <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="Как к вам обращаться?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Телефон <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Дата праздника <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Время начала
                      </label>
                      <input
                        type="time"
                        className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Программа <span className="text-destructive">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Выберите программу</option>
                      <option value="kids">Малышам (3-5 лет) - от 5000₽</option>
                      <option value="school">Школьникам (6-10 лет) - от 7000₽</option>
                      <option value="teens">Подросткам (11-14 лет) - от 8000₽</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Количество детей
                    </label>
                    <input
                      type="number"
                      min="1"
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="Сколько гостей?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Дополнительные пожелания
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="Расскажите о тематике праздника, любимых персонажах..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg py-6 bg-primary hover:bg-primary/90">
                    Отправить заявку
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                <div className="text-3xl">🎭</div>
                <h3 className="text-xl font-bold">Мурляндия</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Аниматорское агентство полного цикла
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="Mail" size={16} />
                  info@murlandiya.ru
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3">Режим работы</h4>
              <p className="text-sm text-muted-foreground">
                Ежедневно с 9:00 до 21:00
              </p>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t text-sm text-muted-foreground">
            © 2024 Мурляндия. Делаем праздники незабываемыми! 🎉
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

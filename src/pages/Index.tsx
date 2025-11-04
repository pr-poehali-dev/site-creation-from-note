import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('software');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Компьютер: Учебное Пособие</h1>
          <p className="text-sm mt-2 opacity-90">Основы информатики и вычислительной техники</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Содержание</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <button
                  onClick={() => setActiveSection('software')}
                  className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                    activeSection === 'software' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-secondary'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon name="Package" size={18} />
                    <span className="font-medium">1. Программное обеспечение</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveSection('computer')}
                  className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                    activeSection === 'computer' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-secondary'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon name="Monitor" size={18} />
                    <span className="font-medium">2. Всё о компьютере</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveSection('contact')}
                  className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                    activeSection === 'contact' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-secondary'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon name="Mail" size={18} />
                    <span className="font-medium">3. Контактная информация</span>
                  </div>
                </button>
              </CardContent>
            </Card>
          </aside>

          <main className="lg:col-span-3">
            {activeSection === 'software' && (
              <div className="animate-fade-in space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">1. Программное обеспечение</CardTitle>
                    <CardDescription>Классификация и назначение программ для компьютера</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <section>
                      <h3 className="text-xl font-semibold mb-3 text-primary">1.1. Системные программы</h3>
                      <p className="text-muted-foreground mb-4">
                        Системное программное обеспечение — набор программ, обеспечивающих работу компьютера и управление его ресурсами.
                      </p>
                      <div className="bg-secondary/50 p-4 rounded-md">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Icon name="CheckCircle2" size={18} className="text-primary mt-0.5" />
                            <span><strong>Операционные системы</strong> — Windows, Linux, macOS</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="CheckCircle2" size={18} className="text-primary mt-0.5" />
                            <span><strong>Драйверы</strong> — программы для управления устройствами</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="CheckCircle2" size={18} className="text-primary mt-0.5" />
                            <span><strong>Утилиты</strong> — вспомогательные программы для обслуживания системы</span>
                          </li>
                        </ul>
                      </div>
                    </section>

                    <Separator />

                    <section>
                      <h3 className="text-xl font-semibold mb-3 text-primary">1.2. Прикладные программы</h3>
                      <p className="text-muted-foreground mb-4">
                        Прикладное программное обеспечение предназначено для решения конкретных задач пользователя.
                      </p>
                      <div className="bg-secondary/50 p-4 rounded-md">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Icon name="FileText" size={18} className="text-primary mt-0.5" />
                            <span><strong>Текстовые редакторы</strong> — Microsoft Word, Google Docs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Table" size={18} className="text-primary mt-0.5" />
                            <span><strong>Табличные редакторы</strong> — Microsoft Excel, LibreOffice Calc</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Image" size={18} className="text-primary mt-0.5" />
                            <span><strong>Графические редакторы</strong> — Adobe Photoshop, GIMP</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Globe" size={18} className="text-primary mt-0.5" />
                            <span><strong>Веб-браузеры</strong> — Chrome, Firefox, Safari</span>
                          </li>
                        </ul>
                      </div>
                    </section>

                    <Separator />

                    <section>
                      <h3 className="text-xl font-semibold mb-3 text-primary">1.3. Системы программирования</h3>
                      <p className="text-muted-foreground mb-4">
                        Инструменты для создания новых программ и приложений.
                      </p>
                      <div className="bg-secondary/50 p-4 rounded-md">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Icon name="Code" size={18} className="text-primary mt-0.5" />
                            <span><strong>Компиляторы</strong> — преобразуют код в исполняемую программу</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Code" size={18} className="text-primary mt-0.5" />
                            <span><strong>Интерпретаторы</strong> — выполняют код построчно</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Code" size={18} className="text-primary mt-0.5" />
                            <span><strong>Среды разработки</strong> — Visual Studio, PyCharm, Eclipse</span>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === 'computer' && (
              <div className="animate-fade-in space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">2. Всё о компьютере</CardTitle>
                    <CardDescription>Устройство и принципы работы компьютера</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <section>
                      <h3 className="text-xl font-semibold mb-3 text-primary">2.1. Процессор (CPU)</h3>
                      <p className="text-muted-foreground mb-4">
                        Центральное устройство компьютера, выполняющее обработку информации и управление работой всех компонентов.
                      </p>
                      <div className="bg-secondary/50 p-4 rounded-md">
                        <div className="flex items-start gap-3 mb-3">
                          <Icon name="Cpu" size={24} className="text-primary mt-0.5" />
                          <div>
                            <p className="font-medium">Основные характеристики:</p>
                            <ul className="mt-2 space-y-1 text-sm">
                              <li>• Тактовая частота (измеряется в ГГц)</li>
                              <li>• Количество ядер (2, 4, 8 и более)</li>
                              <li>• Кэш-память (L1, L2, L3)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </section>

                    <Separator />

                    <section>
                      <h3 className="text-xl font-semibold mb-3 text-primary">2.2. Оперативная память (RAM)</h3>
                      <p className="text-muted-foreground mb-4">
                        Устройство для временного хранения данных и программ во время работы компьютера.
                      </p>
                      <div className="bg-secondary/50 p-4 rounded-md">
                        <div className="flex items-start gap-3">
                          <Icon name="HardDrive" size={24} className="text-primary mt-0.5" />
                          <div>
                            <p className="font-medium">Типы памяти:</p>
                            <ul className="mt-2 space-y-2 text-sm">
                              <li><strong>DDR4</strong> — современный стандарт оперативной памяти</li>
                              <li><strong>DDR5</strong> — новейший стандарт с повышенной скоростью</li>
                              <li><strong>Объём</strong> — от 4 ГБ до 128 ГБ и более</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </section>

                    <Separator />

                    <section>
                      <h3 className="text-xl font-semibold mb-3 text-primary">2.3. Устройства ввода-вывода</h3>
                      <p className="text-muted-foreground mb-4">
                        Периферийные устройства для взаимодействия пользователя с компьютером.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary/50 p-4 rounded-md">
                          <div className="flex items-center gap-2 mb-3">
                            <Icon name="ArrowDownToLine" size={20} className="text-primary" />
                            <h4 className="font-semibold">Устройства ввода</h4>
                          </div>
                          <ul className="space-y-1 text-sm">
                            <li>• Клавиатура</li>
                            <li>• Мышь</li>
                            <li>• Сканер</li>
                            <li>• Микрофон</li>
                            <li>• Веб-камера</li>
                          </ul>
                        </div>
                        <div className="bg-secondary/50 p-4 rounded-md">
                          <div className="flex items-center gap-2 mb-3">
                            <Icon name="ArrowUpFromLine" size={20} className="text-primary" />
                            <h4 className="font-semibold">Устройства вывода</h4>
                          </div>
                          <ul className="space-y-1 text-sm">
                            <li>• Монитор</li>
                            <li>• Принтер</li>
                            <li>• Колонки</li>
                            <li>• Наушники</li>
                            <li>• Проектор</li>
                          </ul>
                        </div>
                      </div>
                    </section>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === 'contact' && (
              <div className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">3. Контактная информация</CardTitle>
                    <CardDescription>Свяжитесь с нами для получения дополнительной информации</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Ваше имя <span className="text-destructive">*</span>
                        </label>
                        <Input 
                          id="name" 
                          name="name" 
                          placeholder="Иван Иванов" 
                          required 
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          E-mail <span className="text-destructive">*</span>
                        </label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="example@mail.ru" 
                          required 
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Сообщение <span className="text-destructive">*</span>
                        </label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          placeholder="Введите ваше сообщение..." 
                          rows={6}
                          required 
                        />
                      </div>

                      <Button type="submit" className="w-full md:w-auto">
                        <Icon name="Send" size={18} className="mr-2" />
                        Отправить сообщение
                      </Button>
                    </form>

                    <Separator className="my-8" />

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-3">
                        <Icon name="Mail" size={24} className="text-primary" />
                        <div>
                          <p className="font-medium">Электронная почта</p>
                          <p className="text-sm text-muted-foreground">info@computer-edu.ru</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="MapPin" size={24} className="text-primary" />
                        <div>
                          <p className="font-medium">Адрес</p>
                          <p className="text-sm text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="bg-card border-t mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Компьютер: Учебное Пособие. Образовательный проект по информатике.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const categories = ['Все', 'Женские', 'Мужские', 'Детские', 'Унисекс'];
  
  const products = [
    {
      id: 1,
      name: 'Comfort Cloud',
      price: 2990,
      image: 'https://cdn.poehali.dev/projects/f9583c95-e575-4edc-9dea-ab48ead1abd8/files/f1befe6a-6628-463d-a025-15347a753db9.jpg',
      category: 'Унисекс',
      badge: 'Хит продаж'
    },
    {
      id: 2,
      name: 'Fuzzy Dream',
      price: 3490,
      image: 'https://cdn.poehali.dev/projects/f9583c95-e575-4edc-9dea-ab48ead1abd8/files/c70e50d7-cfaa-47d9-80aa-da1438adcbb4.jpg',
      category: 'Женские',
      badge: 'Новинка'
    },
    {
      id: 3,
      name: 'Minimal Elegance',
      price: 2790,
      image: 'https://cdn.poehali.dev/projects/f9583c95-e575-4edc-9dea-ab48ead1abd8/files/5e303e71-2bb9-4fcd-bc83-8213c2aba736.jpg',
      category: 'Мужские',
      badge: ''
    }
  ];

  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleModelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Спасибо! Мы свяжемся с вами в ближайшее время');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            CozyHome
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#hero" className="hover:text-primary transition-colors">Главная</a>
            <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#jobs" className="hover:text-primary transition-colors">Вакансии</a>
            <a href="#about" className="hover:text-primary transition-colors">О бренде</a>
            <a href="#delivery" className="hover:text-primary transition-colors">Доставка</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" className="hidden sm:flex bg-gradient-to-r from-primary to-secondary">
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Корзина
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button size="sm" variant="outline" className="md:hidden">
                  <Icon name="Menu" size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <a 
                    href="#hero" 
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Главная
                  </a>
                  <a 
                    href="#catalog" 
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Каталог
                  </a>
                  <a 
                    href="#jobs" 
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Вакансии
                  </a>
                  <a 
                    href="#about" 
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    О бренде
                  </a>
                  <a 
                    href="#delivery" 
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Доставка
                  </a>
                  <a 
                    href="#contacts" 
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Контакты
                  </a>
                  <Button className="bg-gradient-to-r from-primary to-secondary mt-4">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Корзина
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-24 pb-16 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary">Новая коллекция 2024</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Домашний уют <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  начинается с ног
                </span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-8">
                Стильная и комфортная домашняя обувь для всей семьи. Создаём уникальные модели с любовью к деталям.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="ShoppingBag" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Star" size={20} className="mr-2" />
                  Стать моделью
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              {products.slice(0, 3).map((product, idx) => (
                <div 
                  key={product.id}
                  className={`${idx === 0 ? 'col-span-2' : ''} rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300`}
                >
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Каталог товаров</h2>
            <p className="text-muted-foreground">Выбирайте идеальную пару для дома</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? 'bg-gradient-to-r from-primary to-secondary' : ''}
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <Card 
                key={product.id} 
                className="group hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  {product.badge && (
                    <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary to-secondary">
                      {product.badge}
                    </Badge>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {product.price} ₽
                    </span>
                    <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                      <Icon name="Plus" size={18} className="mr-1" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="jobs" className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Icon name="Camera" size={48} className="mx-auto mb-4 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Станьте моделью CozyHome</h2>
            <p className="text-muted-foreground text-lg">
              Ищем харизматичных людей для фотосессий нашей новой коллекции. Съёмки проходят на дому в комфортной обстановке.
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Заявка на участие</CardTitle>
              <CardDescription>Заполните форму и мы свяжемся с вами для обсуждения деталей</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleModelSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя</label>
                  <Input 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">О себе</label>
                  <Textarea 
                    placeholder="Расскажите о себе, опыте фотосессий, почему хотите стать моделью..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="DollarSign" size={40} className="mx-auto mb-3 text-accent" />
                <h3 className="font-bold mb-2">Оплата</h3>
                <p className="text-sm text-muted-foreground">От 5000₽ за фотосессию</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Home" size={40} className="mx-auto mb-3 text-primary" />
                <h3 className="font-bold mb-2">На дому</h3>
                <p className="text-sm text-muted-foreground">Съёмки в вашей локации</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Gift" size={40} className="mx-auto mb-3 text-secondary" />
                <h3 className="font-bold mb-2">Бонусы</h3>
                <p className="text-sm text-muted-foreground">Обувь в подарок после съёмок</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О бренде CozyHome</h2>
              <p className="text-muted-foreground mb-4">
                Мы создаём домашнюю обувь, которая объединяет стиль, комфорт и качество. Каждая пара разрабатывается с учётом анатомии стопы и современных трендов.
              </p>
              <p className="text-muted-foreground mb-6">
                Наша миссия — сделать домашний отдых максимально приятным. Мы используем натуральные материалы и работаем только с проверенными производителями.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">500+</div>
                  <div className="text-sm text-muted-foreground">Моделей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">10K+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">5 лет</div>
                  <div className="text-sm text-muted-foreground">На рынке</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="col-span-2">
                <CardContent className="p-6 flex items-center gap-4">
                  <Icon name="Award" size={40} className="text-primary" />
                  <div>
                    <h4 className="font-bold mb-1">100% качество</h4>
                    <p className="text-sm text-muted-foreground">Гарантия на всю продукцию</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Recycle" size={40} className="mx-auto mb-2 text-accent" />
                  <h4 className="font-bold text-sm">Эко-материалы</h4>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Heart" size={40} className="mx-auto mb-2 text-secondary" />
                  <h4 className="font-bold text-sm">Ручная работа</h4>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Доставка и оплата</h2>
          <Tabs defaultValue="delivery" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="delivery">Доставка</TabsTrigger>
              <TabsTrigger value="payment">Оплата</TabsTrigger>
            </TabsList>
            <TabsContent value="delivery" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Truck" size={24} className="text-primary" />
                    Курьерская доставка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">По Москве и МО — 300₽, бесплатно от 3000₽. Доставка в течение 1-2 дней.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Package" size={24} className="text-secondary" />
                    Пункты выдачи
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Сеть пунктов СДЭК и Boxberry по всей России. Стоимость от 250₽.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Mail" size={24} className="text-accent" />
                    Почта России
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Доставка в любую точку России. Стоимость рассчитывается индивидуально.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="payment" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="CreditCard" size={24} className="text-primary" />
                    Онлайн-оплата
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Банковские карты Visa, MasterCard, МИР. Безопасная оплата через защищённое соединение.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Wallet" size={24} className="text-secondary" />
                    Наличными
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Оплата курьеру при получении заказа (только для Москвы и МО).</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Контакты</h2>
          <div className="max-w-md mx-auto">
            <Card>
              <CardContent className="pt-6">
                <Icon name="Mail" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="font-bold text-xl mb-3">Напишите нам</h3>
                <a href="mailto:cozy.cloud@mail.ru" className="text-lg text-primary hover:underline">
                  cozy.cloud@mail.ru
                </a>
                <p className="text-sm text-muted-foreground mt-2">Ответим в течение 24 часов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 px-4 mt-16">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            CozyHome
          </div>
          <p className="text-muted-foreground mb-6">Домашний уют начинается с ног</p>
          <div className="flex justify-center gap-4 mb-6">
            <Button variant="outline" size="icon">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="outline" size="icon">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="outline" size="icon">
              <Icon name="Twitter" size={20} />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 CozyHome. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-3 text-red-600">Почему Яндекс — мусорная поисковая выдача</h1>
          <p className="text-lg text-gray-600">Анализ проблем поисковой системы Яндекс</p>
        </header>

        <div className="space-y-8">
          <Card className="p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Icon name="Search" className="mr-2 text-red-500" size={24} />
              <h2 className="text-2xl font-bold">Основные проблемы поисковой выдачи</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Поисковая система Яндекс уже давно подвергается критике за качество своей выдачи. 
              Пользователи регулярно сталкиваются с проблемами релевантности результатов и искусственным 
              продвижением собственных сервисов компании.
            </p>
            <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Проблема качества</Badge>
          </Card>

          <Card className="p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Icon name="Star" className="mr-2 text-yellow-500" size={20} />
              Доминирование внутренних суррогатных сервисов
            </h2>
            <p className="text-gray-700 mb-3">
              Яндекс искусственно присваивает своим сервисам наивысший результат по разным поисковым фразам, 
              чтобы увеличить свою аудиторию и заработать больше денег. Независимо от релевантности, внутренние 
              сервисы Яндекса всегда находятся на верхних позициях выдачи.
            </p>
            <div className="bg-yellow-50 p-4 rounded-md">
              <p className="text-sm italic text-gray-700">
                Пример: при поиске "вызов электрика Колпино" пользователь увидит в первую очередь 
                Яндекс Услуги и магазины электротехники, а не реальных специалистов.
              </p>
            </div>
          </Card>

          <Card className="p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Icon name="Trash2" className="mr-2 text-gray-500" size={20} />
              "Мусорные" сайты в выдаче
            </h2>
            <p className="text-gray-700 mb-3">
              В выдаче Яндекса часто встречаются выкупленные домены, которые наполняют низкокачественным 
              контентом с помощью нейросетей и SEO по ключевым словам. Такие сайты хорошо индексируются 
              и выходят первыми в поиске, а владелец получает доход с показа рекламы.
            </p>
          </Card>

          <Separator className="my-8" />

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Icon name="Cookie" className="mr-2 text-gray-500" size={18} />
                Проблемы с cookie-файлами
              </h3>
              <p className="text-gray-700">
                После того как большинство браузеров перестало передавать файлы cookie, алгоритм 
                «расфокусировался» и не может точечно ориентироваться на нужную аудиторию.
              </p>
            </Card>

            <Card className="p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Icon name="Zap" className="mr-2 text-gray-500" size={18} />
                Приоритет скорости над качеством
              </h3>
              <p className="text-gray-700">
                Яндекс делает ставку на скорость поиска, а не на его точность, что приводит 
                к снижению качества результатов.
              </p>
            </Card>
          </div>

          <Card className="p-6 shadow-md bg-red-50">
            <h2 className="text-xl font-semibold mb-4 text-red-700">Почему ничего не меняется?</h2>
            <p className="text-gray-700">
              Для улучшения качества выдачи Яндекс ничего не делает. Компания не в состоянии качественно 
              работать над поисковыми алгоритмами, поскольку ориентирована на коммерческую выгоду от 
              собственных сервисов, а не на удовлетворение реальных потребностей пользователей.
            </p>
          </Card>
        </div>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>© 2025 Анализ проблем поисковых систем</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

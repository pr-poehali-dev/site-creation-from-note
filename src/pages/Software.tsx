const Software = () => {
  return (
    <div className="min-h-screen bg-[#C0C0C0] p-4">
      <div className="max-w-4xl mx-auto bg-white border-4 border-[#000080] shadow-2xl">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4" style={{ color: '#0000FF' }}>
              Программное обеспечение
            </h1>
            <hr className="border-2 border-[#000080] my-4" />
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000080' }}>
                Системные программы
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4" style={{ fontSize: '16px' }}>
                <li>Операционные системы</li>
                <li>Драйверы устройств</li>
                <li>Утилиты обслуживания</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000080' }}>
                Прикладные программы
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4" style={{ fontSize: '16px' }}>
                <li>Текстовые редакторы</li>
                <li>Табличные редакторы</li>
                <li>Графические редакторы</li>
                <li>Электронные таблицы</li>
                <li>Базы данных</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000080' }}>
                Системы программирования
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4" style={{ fontSize: '16px' }}>
                <li>Компиляторы</li>
                <li>Интерпретаторы</li>
                <li>Среды разработки</li>
              </ul>
            </section>
          </div>

          <div className="mt-12 text-center border-t-2 border-[#000080] pt-6">
            <p className="text-lg">
              <a href="/" className="text-[#0000FF] underline hover:text-[#FF0000]">
                Вернуться на главную
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software;

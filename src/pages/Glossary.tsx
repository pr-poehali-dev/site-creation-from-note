const Glossary = () => {
  return (
    <div className="min-h-screen bg-[#C0C0C0] p-4">
      <div className="max-w-4xl mx-auto bg-white border-4 border-[#000080] shadow-2xl">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4" style={{ color: '#0000FF' }}>
              Словарь
            </h1>
            <hr className="border-2 border-[#000080] my-4" />
            <p className="text-lg mt-4">Компьютерные термины</p>
          </div>

          <div className="space-y-6">
            <div className="border-b-2 border-gray-300 pb-4">
              <dl>
                <dt className="text-xl font-bold mb-2" style={{ color: '#000080' }}>
                  Процессор
                </dt>
                <dd className="ml-6 text-base">
                  Центральное устройство компьютера, производящее обработку информации в двоичном коде.
                </dd>
              </dl>
            </div>

            <div className="border-b-2 border-gray-300 pb-4">
              <dl>
                <dt className="text-xl font-bold mb-2" style={{ color: '#000080' }}>
                  Оперативная память
                </dt>
                <dd className="ml-6 text-base">
                  Устройство, в котором хранятся программы и данные.
                </dd>
              </dl>
            </div>

            <div className="border-b-2 border-gray-300 pb-4">
              <dl>
                <dt className="text-xl font-bold mb-2" style={{ color: '#000080' }}>
                  Термины сервисов Интернета
                </dt>
                <dd className="ml-6 text-base space-y-2">
                  <p><strong>WWW</strong> - World Wide Web</p>
                  <p><strong>E-mail</strong> - Электронная почта</p>
                  <p><strong>ICQ</strong> - Служба мгновенных сообщений</p>
                </dd>
              </dl>
            </div>

            <div className="mt-8 bg-gray-100 p-6 rounded">
              <h3 className="text-lg font-bold mb-4">Какой браузер вы используете наиболее часто:</h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input type="checkbox" name="browser" value="ie" className="w-4 h-4" />
                  <span>Internet Explorer</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" name="browser" value="opera" className="w-4 h-4" />
                  <span>Opera</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" name="browser" value="firefox" className="w-4 h-4" />
                  <span>FireFox</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" name="browser" value="chrome" className="w-4 h-4" />
                  <span>Google Chrome</span>
                </label>
              </div>
            </div>
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

export default Glossary;

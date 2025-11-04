const Index = () => {
  return (
    <div className="min-h-screen bg-[#C0C0C0] p-4">
      <div className="max-w-4xl mx-auto bg-white border-4 border-[#000080] shadow-2xl">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4" style={{ color: '#0000FF' }}>
              Всё о компьютере
            </h1>
            <hr className="border-2 border-[#000080] my-4" />
            <hr className="border border-[#000080] my-2" />
          </div>

          <div className="text-center mb-8">
            <p className="text-xl mb-6" style={{ fontSize: '18px', fontFamily: 'Arial', color: '#000000' }}>
              На этом сайте вы сможете получить различную информацию о компьютере, 
              его программном обеспечении, а также о компьютерных коммуникациях
            </p>
          </div>

          <div className="text-right mb-8 pr-8">
            <p className="text-lg italic" style={{ color: '#000000' }}>
              Термины, которые вам помогут разобраться с компьютерными<br />
              терминами, а также сможете заполнить анкету
            </p>
          </div>

          <div className="flex justify-center my-8">
            <img 
              src="https://cdn.poehali.dev/files/8f48ce74-46cc-425b-a138-c788be071717.jpeg" 
              alt="Computer documentation" 
              className="max-w-md rounded border-2 border-gray-400 shadow-lg"
            />
          </div>

          <div className="text-center space-y-4 mt-12">
            <p className="text-xl mb-6">
              <a href="/software" className="text-[#0000FF] underline hover:text-[#FF0000] transition-colors">
                Программы
              </a>
              {' / '}
              <a href="/glossary" className="text-[#0000FF] underline hover:text-[#FF0000] transition-colors">
                Словарь
              </a>
              {' / '}
              <a href="/form" className="text-[#0000FF] underline hover:text-[#FF0000] transition-colors">
                Анкета
              </a>
            </p>
          </div>

          <div className="mt-16 text-center border-t-2 border-[#000080] pt-8">
            <address className="not-italic space-y-3">
              <p className="text-lg">
                <a 
                  href="mailto:info@computer.ru" 
                  className="text-[#0000FF] underline hover:text-[#FF0000] transition-colors"
                >
                  электронный адрес
                </a>
              </p>
              <p className="text-lg">
                <a 
                  href="/" 
                  className="text-[#0000FF] underline hover:text-[#FF0000] transition-colors"
                >
                  вернуться на стартовую
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

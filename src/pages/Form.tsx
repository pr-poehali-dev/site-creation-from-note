import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Form = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    group: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Анкета отправлена",
      description: "Спасибо за ваши данные!",
    });
  };

  return (
    <div className="min-h-screen bg-[#C0C0C0] p-4">
      <div className="max-w-4xl mx-auto bg-white border-4 border-[#000080] shadow-2xl">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4" style={{ color: '#0000FF' }}>
              Анкета
            </h1>
            <hr className="border-2 border-[#000080] my-4" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <p className="mb-3 font-medium">Пожалуйста, введите ваше имя:</p>
              <input
                type="text"
                name="name"
                size={30}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-2 border-gray-400 px-3 py-2 w-full max-w-md"
                placeholder="Ваше имя"
                required
              />
            </div>

            <div>
              <p className="mb-3 font-medium">E-mail:</p>
              <input
                type="email"
                name="email"
                size={30}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-2 border-gray-400 px-3 py-2 w-full max-w-md"
                placeholder="example@mail.com"
                required
              />
            </div>

            <div>
              <p className="mb-3 font-medium">Какую еще информацию вы хотели бы видеть на сайте?</p>
              <textarea
                name="message"
                rows={4}
                cols={30}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="border-2 border-gray-400 px-3 py-2 w-full max-w-md"
                placeholder="Ваши предложения"
              />
            </div>

            <div>
              <p className="mb-3 font-medium">Укажите, к какой группе пользователей вы себя относите:</p>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="group"
                    value="student"
                    checked={formData.group === 'student'}
                    onChange={(e) => setFormData({ ...formData, group: e.target.value })}
                  />
                  <span>учащийся</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="group"
                    value="pupil"
                    checked={formData.group === 'pupil'}
                    onChange={(e) => setFormData({ ...formData, group: e.target.value })}
                  />
                  <span>студент</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="group"
                    value="teacher"
                    checked={formData.group === 'teacher'}
                    onChange={(e) => setFormData({ ...formData, group: e.target.value })}
                  />
                  <span>учитель</span>
                </label>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="bg-[#0000FF] text-white px-8 py-3 border-2 border-[#000080] hover:bg-[#0000CC] transition-colors text-lg font-medium"
              >
                Отправить
              </button>
            </div>
          </form>

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

export default Form;

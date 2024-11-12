import React, { useState } from 'react';

function ConnectForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    pujaType: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='w-full min-h-screen bg-gradient-radial flex items-center justify-center p-4'>
      <div className='w-full max-w-md md:max-w-lg lg:max-w-xl bg-opacity-80 bg-[#0C0F0E] p-6 rounded-lg'>
        <div className='text-center mb-6'>
          <h1 className='text-white text-2xl md:text-3xl font-semibold'>Contact Form</h1>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-white" htmlFor="fullname">Name*</label>
            <input
              className="outline-none w-full h-[45px] bg-transparent border-b-2 border-white text-white px-2"
              onChange={handleChange}
              placeholder='Sarthak Vyas'
              type="text"
              id='fullname'
              name="fullname"
              value={formData.fullname}
            />
          </div>

          <div>
            <label className="text-white" htmlFor="email">Email*</label>
            <input
              className="outline-none w-full h-[45px] bg-transparent border-b-2 border-white text-white px-2"
              placeholder='xyz@gmail.com'
              type="text"
              id='email'
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>

          <div>
            <label className="text-white" htmlFor="pujaType">Select Puja*</label>
            <select
              id="pujaType"
              name="pujaType"
              className='outline-none bg-transparent border-b-2 border-white text-white w-full h-[45px] px-2'
              onChange={handleChange}
              value={formData.pujaType}
            >
              <option className='bg-[#0C0F0E]' value="">Select</option>
              <option className='bg-[#0C0F0E]' value="नवग्रह शांति पुजा">नवग्रह शांति पुजा</option>
              <option className='bg-[#0C0F0E]' value="कालसर्पदोष पुजा">कालसर्पदोष पुजा</option>
              <option className='bg-[#0C0F0E]' value="वस्तुपूजा">वस्तुपूजा</option>
              <option className='bg-[#0C0F0E]' value="महामृत्युंजय जप अनुष्ठान">महामृत्युंजय जप अनुष्ठान</option>
              <option className='bg-[#0C0F0E]' value="शिव अभिषेक">शिव अभिषेक</option>
              <option className='bg-[#0C0F0E]' value="पितृदोष पुजा">पितृदोष पुजा</option>
              <option className='bg-[#0C0F0E]' value="मंगलदोष पुजा">मंगलदोष पुजा</option>
            </select>
          </div>

          <div>
            <label className="text-white" htmlFor="message">Message*</label>
            <textarea
              placeholder='Type any message here.'
              id="message"
              name="message"
              className='outline-none bg-transparent border-b-2 border-white text-white w-full h-[100px] px-2'
              rows={3}
              onChange={handleChange}
              value={formData.message}
            ></textarea>
          </div>

          <div className='flex justify-end pt-4'>
            <button className='px-6 py-2 rounded-md bg-[#24CFA6] text-white font-medium hover:bg-[#20B093] transition-all'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectForm;

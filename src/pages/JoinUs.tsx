import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Building, ArrowRight } from 'lucide-react';

const JoinUs = () => {
  const [formType, setFormType] = useState('member');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-100">Join Our Community</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Whether you're a student entrepreneur or an organization looking to partner,
            we'd love to have you as part of our community
          </p>
        </motion.div>

        {/* Form Type Selection */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-lg shadow-md p-2 inline-flex">
            <button
              onClick={() => setFormType('member')}
              className={`px-6 py-2 rounded-md transition-colors flex items-center ${
                formType === 'member'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Users className="h-5 w-5 mr-2" />
              Join as Member
            </button>
            <button
              onClick={() => setFormType('organization')}
              className={`px-6 py-2 rounded-md transition-colors flex items-center ${
                formType === 'organization'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Building className="h-5 w-5 mr-2" />
              Partner Organization
            </button>
          </div>
        </div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  {formType === 'organization' ? 'Organization Name' : 'Full Name'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-100"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-100"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-100"
                />
              </div>

              {formType === 'organization' && (
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-100"
                  />
                </div>
              )}

              {formType === 'member' && (
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-1">
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-100"
                  >
                    <option value="">Select an area</option>
                    <option value="technology">Technology</option>
                    <option value="business">Business</option>
                    <option value="social">Social Enterprise</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  {formType === 'organization' ? 'Partnership Details' : 'Why do you want to join?'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-100"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Submit Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default JoinUs;
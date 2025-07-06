import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  DollarSign, 
  Users, 
  Upload, 
  Plus, 
  Trash2,
  ArrowLeft,
  ArrowRight,
  Check,
  Settings,
  Palette
} from 'lucide-react';

const CreateEvent = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    name: '',
    description: '',
    date: '',
    time: '',
    venue: '',
    address: '',
    
    // Ticket Tiers
    tiers: [
      { name: 'General Admission', price: '', supply: '', description: '' }
    ],
    
    // Resale Rules
    resaleEnabled: true,
    maxResalePrice: '120', // percentage
    transferDelay: '24', // hours
    
    // NFT Art
    artworkFile: null,
    artworkDescription: '',
    artistCredit: '',
  });

  const steps = [
    { id: 1, name: 'Event Details', icon: Calendar },
    { id: 2, name: 'Ticket Tiers', icon: Users },
    { id: 3, name: 'Resale Rules', icon: Settings },
    { id: 4, name: 'NFT Artwork', icon: Palette },
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTierChange = (index: number, field: string, value: string) => {
    const newTiers = [...formData.tiers];
    newTiers[index] = { ...newTiers[index], [field]: value };
    setFormData(prev => ({ ...prev, tiers: newTiers }));
  };

  const addTier = () => {
    setFormData(prev => ({
      ...prev,
      tiers: [...prev.tiers, { name: '', price: '', supply: '', description: '' }]
    }));
  };

  const removeTier = (index: number) => {
    if (formData.tiers.length > 1) {
      const newTiers = formData.tiers.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, tiers: newTiers }));
    }
  };

  const handleSubmit = async () => {
    // TODO: Implement API call to create event
    console.log('Creating event:', formData);
    
    // Mock success - redirect to events page
    navigate('/platform/events');
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Event Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Enter event name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                placeholder="Describe your event"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Time *
                </label>
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => handleInputChange('time', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Venue Name *
              </label>
              <input
                type="text"
                value={formData.venue}
                onChange={(e) => handleInputChange('venue', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Enter venue name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Address *
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Enter full address"
              />
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Ticket Tiers</h3>
              <button
                onClick={addTier}
                className="flex items-center px-3 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Tier
              </button>
            </div>

            <div className="space-y-4">
              {formData.tiers.map((tier, index) => (
                <div key={index} className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-slate-900 dark:text-slate-100">Tier {index + 1}</h4>
                    {formData.tiers.length > 1 && (
                      <button
                        onClick={() => removeTier(index)}
                        className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Tier Name *
                      </label>
                      <input
                        type="text"
                        value={tier.name}
                        onChange={(e) => handleTierChange(index, 'name', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="e.g., VIP, General"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Price ($) *
                      </label>
                      <input
                        type="number"
                        value={tier.price}
                        onChange={(e) => handleTierChange(index, 'price', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="0.00"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Supply *
                      </label>
                      <input
                        type="number"
                        value={tier.supply}
                        onChange={(e) => handleTierChange(index, 'supply', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="100"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Description
                    </label>
                    <textarea
                      value={tier.description}
                      onChange={(e) => handleTierChange(index, 'description', e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                      placeholder="What's included in this tier?"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Resale Settings</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Configure how tickets can be resold to prevent scalping while allowing legitimate transfers.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-slate-100">Enable Resale</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Allow ticket holders to resell their tickets</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.resaleEnabled}
                    onChange={(e) => handleInputChange('resaleEnabled', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-teal-600"></div>
                </label>
              </div>

              {formData.resaleEnabled && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Maximum Resale Price (% of original)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={formData.maxResalePrice}
                        onChange={(e) => handleInputChange('maxResalePrice', e.target.value)}
                        className="w-full px-4 py-3 pr-8 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="120"
                        min="100"
                        max="200"
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 dark:text-slate-400">%</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Recommended: 110-120% to allow for reasonable profit while preventing scalping
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Transfer Delay (hours)
                    </label>
                    <input
                      type="number"
                      value={formData.transferDelay}
                      onChange={(e) => handleInputChange('transferDelay', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="24"
                      min="0"
                      max="168"
                    />
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      How long after purchase before tickets can be transferred (0-168 hours)
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">NFT Artwork</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Upload custom artwork for your ticket NFTs. This will be the collectible image that attendees receive.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Artwork Upload
                </label>
                <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-8 text-center hover:border-teal-500 dark:hover:border-teal-400 transition-colors">
                  <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600 dark:text-slate-400 mb-2">
                    Drop your artwork here, or <span className="text-teal-600 dark:text-teal-400 cursor-pointer">browse</span>
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-500">
                    PNG, JPG up to 10MB. Recommended: 1000x1000px
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleInputChange('artworkFile', e.target.files?.[0] || null)}
                    className="hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Artwork Description
                </label>
                <textarea
                  value={formData.artworkDescription}
                  onChange={(e) => handleInputChange('artworkDescription', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  placeholder="Describe the artwork and its significance to the event"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Artist Credit (Optional)
                </label>
                <input
                  type="text"
                  value={formData.artistCredit}
                  onChange={(e) => handleInputChange('artistCredit', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Artist name or attribution"
                />
              </div>

              <div className="bg-teal-50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
                <h4 className="font-medium text-teal-900 dark:text-teal-100 mb-2">NFT Benefits</h4>
                <ul className="text-sm text-teal-700 dark:text-teal-300 space-y-1">
                  <li>• Attendees own their ticket as a collectible NFT</li>
                  <li>• Proof of attendance stored permanently on blockchain</li>
                  <li>• Can be displayed in digital wallets and galleries</li>
                  <li>• Potential for future utility and rewards</li>
                </ul>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate('/platform/events')}
          className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Create New Event</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Set up your event with anti-scalping controls and NFT tickets.
          </p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;
            
            return (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                  isCompleted 
                    ? 'bg-teal-600 border-teal-600 text-white' 
                    : isActive 
                      ? 'border-teal-600 text-teal-600 bg-teal-50 dark:bg-teal-950/20' 
                      : 'border-slate-300 dark:border-slate-600 text-slate-400'
                }`}>
                  {isCompleted ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${
                    isActive ? 'text-teal-600 dark:text-teal-400' : 'text-slate-900 dark:text-slate-100'
                  }`}>
                    {step.name}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    isCompleted ? 'bg-teal-600' : 'bg-slate-300 dark:bg-slate-600'
                  }`} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
        {renderStepContent()}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
            currentStep === 1
              ? 'text-slate-400 cursor-not-allowed'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
          }`}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Previous
        </button>

        <div className="flex space-x-3">
          <button
            onClick={() => navigate('/platform/events')}
            className="px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            Save as Draft
          </button>
          
          {currentStep === steps.length ? (
            <button
              onClick={handleSubmit}
              className="flex items-center px-6 py-2 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Create Event
              <Check className="h-4 w-4 ml-2" />
            </button>
          ) : (
            <button
              onClick={nextStep}
              className="flex items-center px-6 py-2 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
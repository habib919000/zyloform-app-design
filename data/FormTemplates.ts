export interface FormTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  fields: FormField[];
  createdAt: Date;
  isPopular?: boolean;
  isFeatured?: boolean;
}

export interface FormField {
  id: string;
  name: string;
  type: 'text' | 'email' | 'tel' | 'url' | 'password' | 'number' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date' | 'time' | 'datetime-local' | 'file';
  label: string;
  placeholder?: string;
  helpText?: string;
  required?: boolean;
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    min?: number;
    max?: number;
  };
  options?: Array<{
    value: string;
    label: string;
  }>;
  defaultValue?: string;
}

export const formTemplates: FormTemplate[] = [
  {
    id: 'contact-basic',
    name: 'Basic Contact Form',
    description: 'Simple contact form with name, email, and message fields',
    category: 'Contact',
    fields: [
      {
        id: 'firstName',
        name: 'firstName',
        type: 'text',
        label: 'First Name',
        placeholder: 'Enter your first name...',
        helpText: 'Please enter your first name',
        required: true,
        defaultValue: ''
      },
      {
        id: 'lastName',
        name: 'lastName',
        type: 'text',
        label: 'Last Name',
        placeholder: 'Enter your last name...',
        helpText: 'Please enter your last name',
        required: true,
        defaultValue: ''
      },
      {
        id: 'email',
        name: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'user@example.com',
        helpText: 'We\'ll use this to send you updates',
        required: true,
        defaultValue: ''
      },
      {
        id: 'message',
        name: 'message',
        type: 'textarea',
        label: 'Message',
        placeholder: 'Type your message here...',
        helpText: 'Optional additional information',
        required: false,
        defaultValue: ''
      }
    ],
    createdAt: new Date('2024-01-15'),
    isPopular: true,
    isFeatured: true
  },
  {
    id: 'newsletter-signup',
    name: 'Newsletter Signup',
    description: 'Email subscription form with preferences',
    category: 'Marketing',
    fields: [
      {
        id: 'email',
        name: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'Enter your email...',
        helpText: 'We\'ll never share your email',
        required: true,
        defaultValue: ''
      },
      {
        id: 'firstName',
        name: 'firstName',
        type: 'text',
        label: 'First Name',
        placeholder: 'Your first name...',
        required: false,
        defaultValue: ''
      },
      {
        id: 'preferences',
        name: 'preferences',
        type: 'checkbox',
        label: 'Email Preferences',
        helpText: 'Select topics you\'re interested in',
        required: false,
        options: [
          { value: 'newsletter', label: 'Weekly Newsletter' },
          { value: 'updates', label: 'Product Updates' },
          { value: 'promotions', label: 'Special Offers' }
        ],
        defaultValue: ''
      }
    ],
    createdAt: new Date('2024-01-20'),
    isPopular: true
  },
  {
    id: 'job-application',
    name: 'Job Application Form',
    description: 'Complete job application with resume upload',
    category: 'HR',
    fields: [
      {
        id: 'fullName',
        name: 'fullName',
        type: 'text',
        label: 'Full Name',
        placeholder: 'Enter your full name...',
        required: true,
        defaultValue: ''
      },
      {
        id: 'email',
        name: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'your.email@example.com',
        required: true,
        defaultValue: ''
      },
      {
        id: 'phone',
        name: 'phone',
        type: 'tel',
        label: 'Phone Number',
        placeholder: '+1 (555) 123-4567',
        required: true,
        defaultValue: ''
      },
      {
        id: 'position',
        name: 'position',
        type: 'select',
        label: 'Position Applied For',
        required: true,
        options: [
          { value: 'frontend', label: 'Frontend Developer' },
          { value: 'backend', label: 'Backend Developer' },
          { value: 'fullstack', label: 'Full Stack Developer' },
          { value: 'designer', label: 'UI/UX Designer' },
          { value: 'manager', label: 'Project Manager' }
        ],
        defaultValue: ''
      },
      {
        id: 'experience',
        name: 'experience',
        type: 'select',
        label: 'Years of Experience',
        required: true,
        options: [
          { value: '0-1', label: '0-1 years' },
          { value: '2-3', label: '2-3 years' },
          { value: '4-5', label: '4-5 years' },
          { value: '6+', label: '6+ years' }
        ],
        defaultValue: ''
      },
      {
        id: 'resume',
        name: 'resume',
        type: 'file',
        label: 'Resume/CV',
        helpText: 'Upload your resume (PDF, DOC, DOCX)',
        required: true,
        defaultValue: ''
      },
      {
        id: 'coverLetter',
        name: 'coverLetter',
        type: 'textarea',
        label: 'Cover Letter',
        placeholder: 'Tell us why you\'re interested in this position...',
        helpText: 'Optional but recommended',
        required: false,
        defaultValue: ''
      }
    ],
    createdAt: new Date('2024-01-25'),
    isFeatured: true
  },
  {
    id: 'event-registration',
    name: 'Event Registration',
    description: 'Registration form for events and workshops',
    category: 'Events',
    fields: [
      {
        id: 'firstName',
        name: 'firstName',
        type: 'text',
        label: 'First Name',
        placeholder: 'Enter your first name...',
        required: true,
        defaultValue: ''
      },
      {
        id: 'lastName',
        name: 'lastName',
        type: 'text',
        label: 'Last Name',
        placeholder: 'Enter your last name...',
        required: true,
        defaultValue: ''
      },
      {
        id: 'email',
        name: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'your.email@example.com',
        required: true,
        defaultValue: ''
      },
      {
        id: 'company',
        name: 'company',
        type: 'text',
        label: 'Company/Organization',
        placeholder: 'Your company name...',
        required: false,
        defaultValue: ''
      },
      {
        id: 'attendeeType',
        name: 'attendeeType',
        type: 'radio',
        label: 'Attendee Type',
        required: true,
        options: [
          { value: 'student', label: 'Student' },
          { value: 'professional', label: 'Professional' },
          { value: 'speaker', label: 'Speaker' },
          { value: 'sponsor', label: 'Sponsor' }
        ],
        defaultValue: ''
      },
      {
        id: 'dietaryRestrictions',
        name: 'dietaryRestrictions',
        type: 'textarea',
        label: 'Dietary Restrictions',
        placeholder: 'Please list any dietary restrictions...',
        helpText: 'Optional - helps us plan catering',
        required: false,
        defaultValue: ''
      }
    ],
    createdAt: new Date('2024-02-01'),
    isPopular: true
  },
  {
    id: 'customer-feedback',
    name: 'Customer Feedback',
    description: 'Collect customer satisfaction and feedback',
    category: 'Survey',
    fields: [
      {
        id: 'customerName',
        name: 'customerName',
        type: 'text',
        label: 'Your Name',
        placeholder: 'Enter your name...',
        required: false,
        defaultValue: ''
      },
      {
        id: 'email',
        name: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'your.email@example.com',
        helpText: 'Optional - for follow-up',
        required: false,
        defaultValue: ''
      },
      {
        id: 'satisfaction',
        name: 'satisfaction',
        type: 'radio',
        label: 'Overall Satisfaction',
        required: true,
        options: [
          { value: '5', label: 'Very Satisfied' },
          { value: '4', label: 'Satisfied' },
          { value: '3', label: 'Neutral' },
          { value: '2', label: 'Dissatisfied' },
          { value: '1', label: 'Very Dissatisfied' }
        ],
        defaultValue: ''
      },
      {
        id: 'improvements',
        name: 'improvements',
        type: 'checkbox',
        label: 'Areas for Improvement',
        helpText: 'Select all that apply',
        required: false,
        options: [
          { value: 'speed', label: 'Service Speed' },
          { value: 'quality', label: 'Product Quality' },
          { value: 'support', label: 'Customer Support' },
          { value: 'pricing', label: 'Pricing' },
          { value: 'features', label: 'Features' }
        ],
        defaultValue: ''
      },
      {
        id: 'comments',
        name: 'comments',
        type: 'textarea',
        label: 'Additional Comments',
        placeholder: 'Tell us more about your experience...',
        helpText: 'Optional detailed feedback',
        required: false,
        defaultValue: ''
      }
    ],
    createdAt: new Date('2024-02-05')
  },
  {
    id: 'support-ticket',
    name: 'Support Ticket',
    description: 'Technical support request form',
    category: 'Support',
    fields: [
      {
        id: 'name',
        name: 'name',
        type: 'text',
        label: 'Full Name',
        placeholder: 'Enter your full name...',
        required: true,
        defaultValue: ''
      },
      {
        id: 'email',
        name: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'your.email@example.com',
        required: true,
        defaultValue: ''
      },
      {
        id: 'priority',
        name: 'priority',
        type: 'select',
        label: 'Priority Level',
        required: true,
        options: [
          { value: 'low', label: 'Low - General Question' },
          { value: 'medium', label: 'Medium - Issue Affecting Work' },
          { value: 'high', label: 'High - Critical Issue' },
          { value: 'urgent', label: 'Urgent - System Down' }
        ],
        defaultValue: ''
      },
      {
        id: 'category',
        name: 'category',
        type: 'select',
        label: 'Issue Category',
        required: true,
        options: [
          { value: 'technical', label: 'Technical Issue' },
          { value: 'billing', label: 'Billing Question' },
          { value: 'feature', label: 'Feature Request' },
          { value: 'bug', label: 'Bug Report' },
          { value: 'other', label: 'Other' }
        ],
        defaultValue: ''
      },
      {
        id: 'subject',
        name: 'subject',
        type: 'text',
        label: 'Subject',
        placeholder: 'Brief description of your issue...',
        required: true,
        defaultValue: ''
      },
      {
        id: 'description',
        name: 'description',
        type: 'textarea',
        label: 'Detailed Description',
        placeholder: 'Please provide as much detail as possible...',
        helpText: 'Include steps to reproduce, error messages, etc.',
        required: true,
        defaultValue: ''
      },
      {
        id: 'attachments',
        name: 'attachments',
        type: 'file',
        label: 'Attachments',
        helpText: 'Screenshots, logs, or other relevant files',
        required: false,
        defaultValue: ''
      }
    ],
    createdAt: new Date('2024-02-10')
  },
  {
    id: 'product-inquiry',
    name: 'Product Inquiry',
    description: 'Sales inquiry and product information request',
    category: 'Sales',
    fields: [
      {
        id: 'companyName',
        name: 'companyName',
        type: 'text',
        label: 'Company Name',
        placeholder: 'Your company name...',
        required: true,
        defaultValue: ''
      },
      {
        id: 'contactName',
        name: 'contactName',
        type: 'text',
        label: 'Contact Name',
        placeholder: 'Your full name...',
        required: true,
        defaultValue: ''
      },
      {
        id: 'email',
        name: 'email',
        type: 'email',
        label: 'Business Email',
        placeholder: 'contact@company.com',
        required: true,
        defaultValue: ''
      },
      {
        id: 'phone',
        name: 'phone',
        type: 'tel',
        label: 'Phone Number',
        placeholder: '+1 (555) 123-4567',
        required: false,
        defaultValue: ''
      },
      {
        id: 'companySize',
        name: 'companySize',
        type: 'select',
        label: 'Company Size',
        required: true,
        options: [
          { value: '1-10', label: '1-10 employees' },
          { value: '11-50', label: '11-50 employees' },
          { value: '51-200', label: '51-200 employees' },
          { value: '201-1000', label: '201-1000 employees' },
          { value: '1000+', label: '1000+ employees' }
        ],
        defaultValue: ''
      },
      {
        id: 'budget',
        name: 'budget',
        type: 'select',
        label: 'Budget Range',
        required: false,
        options: [
          { value: 'under-1k', label: 'Under $1,000' },
          { value: '1k-5k', label: '$1,000 - $5,000' },
          { value: '5k-10k', label: '$5,000 - $10,000' },
          { value: '10k-25k', label: '$10,000 - $25,000' },
          { value: '25k+', label: '$25,000+' }
        ],
        defaultValue: ''
      },
      {
        id: 'timeline',
        name: 'timeline',
        type: 'select',
        label: 'Implementation Timeline',
        required: true,
        options: [
          { value: 'immediate', label: 'Immediate (within 1 month)' },
          { value: 'short', label: 'Short term (1-3 months)' },
          { value: 'medium', label: 'Medium term (3-6 months)' },
          { value: 'long', label: 'Long term (6+ months)' },
          { value: 'exploring', label: 'Just exploring options' }
        ],
        defaultValue: ''
      },
      {
        id: 'requirements',
        name: 'requirements',
        type: 'textarea',
        label: 'Requirements & Goals',
        placeholder: 'Please describe your specific needs and goals...',
        helpText: 'Help us understand how we can best serve you',
        required: true,
        defaultValue: ''
      }
    ],
    createdAt: new Date('2024-02-15')
  },
  {
    id: 'user-registration',
    name: 'User Registration',
    description: 'Complete user account registration form',
    category: 'Account',
    fields: [
      {
        id: 'username',
        name: 'username',
        type: 'text',
        label: 'Username',
        placeholder: 'Choose a username...',
        helpText: 'Must be 3-20 characters, letters and numbers only',
        required: true,
        validation: {
          minLength: 3,
          maxLength: 20,
          pattern: '^[a-zA-Z0-9]+$'
        },
        defaultValue: ''
      },
      {
        id: 'email',
        name: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'your.email@example.com',
        required: true,
        defaultValue: ''
      },
      {
        id: 'password',
        name: 'password',
        type: 'password',
        label: 'Password',
        placeholder: 'Create a strong password...',
        helpText: 'Minimum 8 characters with letters and numbers',
        required: true,
        validation: {
          minLength: 8
        },
        defaultValue: ''
      },
      {
        id: 'confirmPassword',
        name: 'confirmPassword',
        type: 'password',
        label: 'Confirm Password',
        placeholder: 'Confirm your password...',
        required: true,
        defaultValue: ''
      },
      {
        id: 'firstName',
        name: 'firstName',
        type: 'text',
        label: 'First Name',
        placeholder: 'Enter your first name...',
        required: true,
        defaultValue: ''
      },
      {
        id: 'lastName',
        name: 'lastName',
        type: 'text',
        label: 'Last Name',
        placeholder: 'Enter your last name...',
        required: true,
        defaultValue: ''
      },
      {
        id: 'birthDate',
        name: 'birthDate',
        type: 'date',
        label: 'Date of Birth',
        helpText: 'You must be 13 or older to register',
        required: true,
        defaultValue: ''
      },
      {
        id: 'terms',
        name: 'terms',
        type: 'checkbox',
        label: 'Terms and Conditions',
        required: true,
        options: [
          { value: 'accepted', label: 'I agree to the Terms of Service and Privacy Policy' }
        ],
        defaultValue: ''
      },
      {
        id: 'newsletter',
        name: 'newsletter',
        type: 'checkbox',
        label: 'Email Preferences',
        required: false,
        options: [
          { value: 'subscribe', label: 'Subscribe to our newsletter for updates and tips' }
        ],
        defaultValue: ''
      }
    ],
    createdAt: new Date('2024-02-20')
  }
];

// Helper functions for filtering and searching templates
export const getTemplatesByCategory = (category: string): FormTemplate[] => {
  if (category === 'All Templates') {
    return formTemplates;
  }
  return formTemplates.filter(template => template.category === category);
};

export const getPopularTemplates = (): FormTemplate[] => {
  return formTemplates.filter(template => template.isPopular);
};

export const getFeaturedTemplates = (): FormTemplate[] => {
  return formTemplates.filter(template => template.isFeatured);
};

export const searchTemplates = (query: string): FormTemplate[] => {
  const lowercaseQuery = query.toLowerCase();
  return formTemplates.filter(template => 
    template.name.toLowerCase().includes(lowercaseQuery) ||
    template.description.toLowerCase().includes(lowercaseQuery) ||
    template.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const getTemplateById = (id: string): FormTemplate | undefined => {
  return formTemplates.find(template => template.id === id);
};

export const getUniqueCategories = (): string[] => {
  const categories = formTemplates.map(template => template.category);
  return ['All Templates', ...Array.from(new Set(categories))];
};
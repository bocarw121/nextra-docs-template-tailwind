import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { Logo } from '@/components/Logo';

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: '',
  },
  // chat: {
  //   link: '',
  // },
  docsRepositoryBase: '',
  footer: {
    text: 'Nextra docs with Tailwind',
  },

  editLink: {
    text: '',
  },

  feedback: {
    content: '',
  },
};

export default config;

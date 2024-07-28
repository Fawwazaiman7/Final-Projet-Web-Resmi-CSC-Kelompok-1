// src/types/next-i18next.d.ts
declare module 'next-i18next' {
    import { InitOptions } from 'i18next';
    import { ReactNode } from 'react';
  
    interface InitConfig extends InitOptions {
      use: any[];
      i18n: any;
      defaultNS: string;
      defaultLanguage: string;
      otherLanguages: string[];
      localePath: string;
      localeSubpaths: boolean;
      fallbackLng: boolean;
    }
  
    export function appWithTranslation<P = {}>(Component: React.ComponentType<P>): React.ComponentType<P>;
  
    export function useTranslation(ns?: string): any;
  
    export function serverSideTranslations(locale: string, namespacesRequired?: string[]): Promise<{
      [key: string]: any;
    }>;
  }
  
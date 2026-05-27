import React from 'react';
// import socialImg from 'assets/image/myCraft/social.png';
import taskFlow from 'assets/image/myCraft/task.png';
import trainingComplex from 'assets/image/myCraft/cards.png';
// import somegram from 'assets/image/myCraft/somegram.png';
import sofa from 'assets/image/myCraft/sofa.png';
import banya from 'assets/image/myCraft/banya.svg';
import paymentApps from 'assets/image/myCraft/payment-apps.svg';
import {TitleH2} from "common/components/titleH2/titleH2";
import {Craft} from "./craft/Craft";
import type {CraftData} from "./craft/Craft";
import s from './MyCrafts.module.scss';

const crafts: CraftData[] = [
  // {
  //   id: 'social-network',
  //   title: 'Social network',
  //   background: socialImg,
  //   description:
  //     'A dynamic social network application for connecting with friends. ' +
  //     'Features include messaging, profile customization, and activity feeds.',
  //   link: 'https://nikolayk2.github.io/samurai-way-k2/',
  // },
  {
    id: 'fintech-mobile-apps',
    title: 'Fintech Telegram & Mobile Apps',
    background: paymentApps,
    description:
      'One React Native / Expo codebase powers Telegram Mini App and mobile fintech flows for LuxPay, BilderPay, PromPay and BalancePay through environment-driven brand configs.',
    links: [
      {label: 'LuxPay', href: 'https://t.me/luxpay_app_bot'},
      {label: 'BilderPay', href: 'https://t.me/bilderpay_app_bot'},
      {label: 'PromPay', href: 'https://t.me/prompay_app_bot'},
    ],
    tags: ['React Native', 'Expo', 'Telegram App', 'Fintech'],
  },
  {
    id: 'banya',
    title: 'Banya.ru',
    background: banya,
    description:
      'A marketplace platform for discovering and booking baths, saunas, spa services and bath-industry listings with filters, cards and service flows.',
    link: 'https://banya.ru/',
    tags: ['Marketplace', 'Booking', 'Responsive UI'],
  },
  {
    id: 'task-flow',
    title: 'Task Flow',
    background: taskFlow,
    description:
      'A simple and intuitive application that helps you manage your tasks efficiently. ' +
      'Add, edit and delete tasks, set priorities and stay organised.',
    link: 'https://nikolayk2.github.io/it-incubator-todolist-ts-01/',
  },
  {
    id: 'training-complex',
    title: 'Training Complex',
    background: trainingComplex,
    description: 'The application is for creating and studying flashcards. It allows users to organize information into' +
      ' decks, add text, images and practice to improve memory. Developed with React and TypeScript.',
    link: 'https://training-complex.vercel.app/',
  },
  // {
  //   id: 'somegram',
  //   title: 'Somegram',
  //   background: somegram,
  //   description: 'Publish and edit content, manage profile, work with images and integrate payment systems.',
  //   link: 'https://somegram.online/',
  // },
  {
    id: 'sofantastica',
    title: 'Sofantastica',
    background: sofa,
    description: 'A fully responsive e-commerce furniture store built using React. It features a dynamic product catalog, intuitive filtering and sorting, a shopping cart with a smooth user experience, and an integrated admin panel for managing products and categories.',
    link: 'https://sofantastica.com/',
  },
]

type MyCraftsType = {
  id: string
}
export const MyCrafts = ({id}: MyCraftsType) => {
  return (
    <section id={id} className={s.craft}>
      <div className={s.containerItem}>
        <TitleH2 title={'My crafts'}/>
        <div className={`${s.containerCrafts} paddingBlock`}>
          {crafts.map((craft, index) => <Craft key={craft.id} crafts={craft} index={index}/>)}
        </div>

      </div>
    </section>
  );
};



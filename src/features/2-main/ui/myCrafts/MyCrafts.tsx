import React from 'react';
import {v1} from "uuid";
import socialImg from 'assets/image/myCraft/social.png';
import taskFlow from 'assets/image/myCraft/task.png';
import trainingComplex from 'assets/image/myCraft/cards.png';
import somegram from 'assets/image/myCraft/somegram.png';
import sofa from 'assets/image/myCraft/sofa.png';
import {TitleH2} from "common/components/titleH2/titleH2";
import {Craft} from "./craft/Craft";
import s from './MyCrafts.module.scss';

const crafts = [
  {
    id: v1(),
    title: 'Social network',
    background: socialImg,
    description:
      'A dynamic social network application for connecting with friends. ' +
      'Features include messaging, profile customization, and activity feeds.',
    link: 'https://nikolayk2.github.io/samurai-way-k2/',
  },
  {
    id: v1(),
    title: 'Task Flow',
    background: taskFlow,
    description:
      'A simple and intuitive application that helps you manage your tasks efficiently. ' +
      'Add, edit and delete tasks, set priorities and stay organised.',
    link: 'https://nikolayk2.github.io/it-incubator-todolist-ts-01/',
  },
  {
    id: v1(),
    title: 'Training Complex',
    background: trainingComplex,
    description: 'The application is for creating and studying flashcards. It allows users to organize information into' +
      ' decks, add text, images and practice to improve memory. Developed with React and TypeScript.',
    link: 'https://training-complex.vercel.app/',
  },
  {
    id: v1(),
    title: 'Somegram',
    background: somegram,
    description: 'Publish and edit content, manage profile, work with images and integrate payment systems.',
    link: 'https://somegram.online/',
  },
  {
    id: v1(),
    title: 'Sofantastica',
    background: sofa,
    description: 'A fully responsive e-commerce furniture store built using React. It features a dynamic product catalog, intuitive filtering and sorting, a shopping cart with a smooth user experience, and an integrated admin panel for managing products and categories.',
    link: 'https://sofantastica.pl/',
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



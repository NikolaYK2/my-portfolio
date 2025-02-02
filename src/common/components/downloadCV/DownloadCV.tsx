import {Button} from "common/components/button/Button";
import {IconSvg} from "common/components/iconSvg/IconSvg";
import React, {useState} from "react";
import s from './DownloadCV.module.scss'
import {Modal} from "common/components/modal";
import {motion} from "framer-motion"


const CVs = ['ru', "en"] as const;
export const DownloadCV = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClickOpenModal = () => {
    setOpenModal(true);
  }
  const handleClickCloseModal = () => {
    setOpenModal(false);
  }

  return (
    <>
      <section className={s.containerDownloadCV}>
        <Button onClick={handleClickOpenModal}>
          Download CV
          <IconSvg name={"download"}/>
        </Button>
      </section>

      <Modal isOpen={openModal} onOpenChange={setOpenModal}>
        {CVs.map(cv => <motion.a key={cv}
                                 variants={item}
                                 whileHover={{
                                   scale: 1.3,
                                   transition: {
                                     duration: 0, ease: "easeInOut"
                                   } // задаём более быструю анимацию
                                 }} // добавляем эффект hover через Framer Motion
                                 whileFocus={{
                                   scale: 1.3,
                                   transition: {
                                     duration: 0, ease: "easeInOut"
                                   } // задаём более быструю анимацию

                                 }}
                                 className={s.cv}
                                 href={`${process.env.PUBLIC_URL}/cv_${cv}.pdf`}
                                 download={'Nikolaj_CV.pdf'}
                                 onClick={handleClickCloseModal}
          >{cv}</motion.a>
        )}


      </Modal>
    </>
  );
};

const item = {
  hidden: {x: 20, opacity: 0},
  visible: {
    x: 0,
    opacity: 1
  },
};
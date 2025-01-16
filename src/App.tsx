import { BottomSheet } from '@alfalab/core-components/bottom-sheet';
import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { useState } from 'react';
import robotImg from './assets/robot.png';
import { appSt } from './style.css';

const chatBotLink =
  'alfabank://configurable_chat?sourceChannelId=AI3_CHAT&navigationTitle=%D0%90%D0%BB%D1%8C%D1%84%D0%B0-%D0%90%D1%81%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BD%D1%82&attachmentsPickerEnabled=false&suggestionsEnabled=false&welcomeMessageEnabled=false&voiceMessageEnabled=false&quotesEnabled=false';

export const App = () => {
  const [showBs, setShowBs] = useState(false);

  return (
    <>
      <div className={appSt.container}>
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <Typography.TitleResponsive tag="h1" view="large" font="system" weight="semibold">
            Инвестиции
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" color="secondary">
            ИИ-Ассистент
          </Typography.Text>
        </div>
        <img src={robotImg} width={80} height={80} style={{ alignSelf: 'center' }} />
        <div className={appSt.chat({})}>
          <div className={appSt.chatBubble({ position: 'top' })}>
            <Typography.Text view="primary-medium">Здравствуйте!</Typography.Text>
          </div>
          <div className={appSt.chatBubble({ position: 'middle' })}>
            <Typography.Text view="primary-medium">Я ваш проводник в мир инвестиций.</Typography.Text>
          </div>
          <div className={appSt.chatBubble({ position: 'bottom' })}>
            <Typography.Text view="primary-medium">
              Расскажу, как работает фондовый рынок, почему стоит инвестировать и какие инструменты можно использовать, чтобы
              стать инвестором.
            </Typography.Text>
          </div>
        </div>
        <Typography.Text view="primary-medium" color="secondary" style={{ textAlign: 'right' }}>
          Примеры вопросов:
        </Typography.Text>
        <div className={appSt.chat({ position: 'right' })}>
          <div className={appSt.chatBubbleTr({ position: 'top' })}>
            <Typography.Text view="primary-medium" color="secondary">
              Что такое ЦФА?
            </Typography.Text>
          </div>
          <div className={appSt.chatBubbleTr({ position: 'middle' })}>
            <Typography.Text view="primary-medium" color="secondary">
              Что такое краудлендинг?
            </Typography.Text>
          </div>
          <div className={appSt.chatBubbleTr({ position: 'middle' })}>
            <Typography.Text view="primary-medium" color="secondary">
              Что значит торговля с плечом?
            </Typography.Text>
          </div>
        </div>
      </div>

      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          block
          view="primary"
          onClick={() => {
            setShowBs(true);
          }}
        >
          Перейти к ассистенту
        </ButtonMobile>
      </div>

      <BottomSheet
        open={showBs}
        onClose={() => {
          setShowBs(false);
        }}
        contentClassName={appSt.btmContent}
        actionButton={
          <ButtonMobile block view="primary" href={chatBotLink}>
            Понятно, продолжить
          </ButtonMobile>
        }
      >
        <div className={appSt.containerBottom}>
          <Typography.Text view="primary-medium" weight="medium">
            Информация, предоставленная ии-ассистентом, не является индивидуальной инвестиционной рекомендацией. Предложенные
            финансовые инструменты и операции могут не соответствовать вашему профилю и целям (ожиданиям).
          </Typography.Text>
        </div>
      </BottomSheet>
    </>
  );
};

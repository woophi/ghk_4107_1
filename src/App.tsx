import { BottomSheet } from '@alfalab/core-components/bottom-sheet';
import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Gap } from '@alfalab/core-components/gap';
import { List } from '@alfalab/core-components/list';
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
      </div>

      <div className={appSt.containerBottom}>
        <Typography.Text view="primary-medium" color="secondary">
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
            В чат-боте задействованы нейронные сети (генеративный искусственный интеллект). Продолжая, вы соглашаетесь:
          </Typography.Text>
          <List tag="ol" colorMarker="tertiary">
            <List.Item>
              Не размещать, не загружать и не раскрывать каким-либо образом конфиденциальную информацию, включая банковские
              сведения и персональные данные (ФИО, номер карты, номер телефона и др.);
            </List.Item>
            <List.Item>
              Не указывать где-либо без согласия Банка, что ответы получены от Банка или являются его позицией;
            </List.Item>
            <List.Item>Полученные ответы адаптировать под свои нужды;</List.Item>
            <List.Item>Проверять информацию в других источниках из-за возможных ошибок искусственного интеллекта;</List.Item>
            <List.Item>
              Не использовать ии-ассистента для нарушения нормативных актов, норм морали и нравственности, введения в
              заблуждение либо распространения недостоверной информации.
            </List.Item>
            <List.Item>
              Информация, предоставленная ии-ассистентом, не является индивидуальной инвестиционной рекомендацией, и
              финансовые инструменты либо операции, упомянутые в ней, могут не соответствовать Вашему инвестиционному профилю
              и инвестиционным целям (ожиданиям)»
            </List.Item>
          </List>
        </div>
      </BottomSheet>
    </>
  );
};

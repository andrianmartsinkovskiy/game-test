import { FC } from 'react'

import ButtonSimple from '@/components/ui/btn/button-simple'

import imgActive from '@/assets/images/top-left-dec.svg'
import screenBg from '@/assets/images/bottom-right-bg.svg'

import cls from './index.module.css'

interface IFireRadar {
  withPoint?: boolean
}
const FireRadar: FC<IFireRadar> = ({ withPoint }) => {
  return (
    <div className={cls.wrap}>
      <div
        className={cls.distance}
        style={{ backgroundImage: `url("${imgActive}")` }}
      >
        100м
      </div>
      <div className={cls.name}>Person 0.52</div>
      <div
        className={cls.screen}
        style={{ backgroundImage: `url("${screenBg}")` }}
      >
        {withPoint && (
          <div className={cls.point}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='88'
              height='88'
              viewBox='0 0 88 88'
              fill='none'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M45.6236 1.55378C45.6236 0.695652 44.928 0 44.0698 0C43.2117 0 42.516 0.695652 42.516 1.55378V4.35134C34.9175 4.63105 27.8647 7.0476 21.9408 11.0178C21.1463 11.5503 21.0636 12.6717 21.7399 13.348C22.2818 13.8899 23.1345 13.9562 23.7725 13.5317C29.566 9.6775 36.5216 7.43161 44.0017 7.43161C51.5008 7.43161 58.4728 9.68896 64.2751 13.5612C64.9132 13.9871 65.7671 13.9214 66.3096 13.3789C66.9852 12.7033 66.9034 11.5831 66.1105 11.05C60.2121 7.08445 53.1907 4.66084 45.6236 4.35659V1.55378ZM47.916 41.2777C48.1918 41.0019 48.1918 40.5547 47.916 40.2789C47.6401 40.003 47.193 40.003 46.9171 40.2789L44.0702 43.1258L41.2231 40.2787C40.9473 40.0029 40.5001 40.0029 40.2243 40.2787C39.9485 40.5545 39.9485 41.0017 40.2243 41.2775L43.0714 44.1246L40.2251 46.9709C39.9493 47.2467 39.9493 47.6939 40.2251 47.9697C40.5009 48.2455 40.9481 48.2455 41.2239 47.9697L44.0702 45.1234L46.9163 47.9695C47.1921 48.2454 47.6393 48.2454 47.9151 47.9695C48.1909 47.6937 48.1909 47.2465 47.9151 46.9707L45.069 44.1246L47.916 41.2777ZM42.516 83.6483C34.1827 83.3415 26.5057 80.4646 20.2544 75.7869C19.5152 75.2338 19.463 74.1577 20.1158 73.5049C20.6791 72.9416 21.5741 72.896 22.2135 73.3711C28.2988 77.8927 35.8378 80.568 44.0017 80.568C52.1844 80.568 59.7395 77.8803 65.8322 73.3396C66.4715 72.8631 67.3677 72.9081 67.9316 73.472C68.5838 74.1242 68.5324 75.199 67.7947 75.7526C61.5692 80.425 53.9247 83.3092 45.6236 83.643V86.4464C45.6236 87.3045 44.928 88.0002 44.0698 88.0002C43.2117 88.0002 42.516 87.3045 42.516 86.4464V83.6483ZM88.0001 44.0707C88.0001 44.9289 87.3045 45.6245 86.4463 45.6245H83.6448C83.3408 53.1701 80.9296 60.173 76.9837 66.0607C76.4512 66.8552 75.3297 66.9379 74.6534 66.2616C74.1115 65.7197 74.0452 64.867 74.4697 64.2289C78.324 58.4355 80.5699 51.4799 80.5699 43.9998C80.5699 35.8359 77.8946 28.2969 73.373 22.2116C72.8979 21.5722 72.9435 20.6772 73.5067 20.114C74.1596 19.4611 75.2356 19.5133 75.7888 20.2525C80.467 26.5045 83.344 34.1825 83.6502 42.517H86.4463C87.3045 42.517 88.0001 43.2126 88.0001 44.0707ZM4.35311 42.517C4.66008 34.1622 7.55038 26.467 12.2488 20.2068C12.8025 19.4691 13.8773 19.4177 14.5295 20.0699C15.0934 20.6338 15.1383 21.5299 14.6618 22.1693C10.1211 28.262 7.43348 35.817 7.43348 43.9998C7.43348 51.499 9.69083 58.4709 13.5631 64.2732C13.989 64.9113 13.9232 65.7652 13.3808 66.3077C12.7051 66.9833 11.5849 66.9015 11.0518 66.1086C7.08681 60.211 4.66331 53.1905 4.35858 45.6245H1.55378C0.695652 45.6245 0 44.9289 0 44.0707C0 43.2126 0.695652 42.517 1.55378 42.517H4.35311ZM44.0003 68.5082C57.5353 68.5082 68.5077 57.5358 68.5077 44.0008C68.5077 30.4657 57.5353 19.4934 44.0003 19.4934C30.4652 19.4934 19.4929 30.4657 19.4929 44.0008C19.4929 57.5358 30.4652 68.5082 44.0003 68.5082ZM44.0003 70.7682C58.7835 70.7682 70.7677 58.784 70.7677 44.0008C70.7677 29.2175 58.7835 17.2334 44.0003 17.2334C29.217 17.2334 17.2329 29.2175 17.2329 44.0008C17.2329 58.784 29.217 70.7682 44.0003 70.7682Z'
                fill='#FF0000'
              />
            </svg>
          </div>
        )}
        <div className={cls.buttons}>
          <ButtonSimple
            position='top'
            text='Відбій'
            submit={() => alert(1)}
            type='dark'
          />
          <ButtonSimple
            position='bottom'
            text='Вогонь'
            submit={() => alert(1)}
            type='greenSimple'
          />

        </div>
      </div>
    </div>
  )
}

export default FireRadar

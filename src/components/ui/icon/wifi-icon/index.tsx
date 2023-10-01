import { FC } from 'react'

interface iWifiIcon {
  state: boolean
}
const WifiIcon: FC<iWifiIcon> = ({ state }) => {
  return (
    <svg
      width='30'
      height='24'
      viewBox='0 0 30 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.3651 23.1295C14.174 23.1295 13.7246 22.776 13.0168 22.0689C12.3091 21.3619 11.9538 20.9121 11.9511 20.7198C11.9467 20.4119 12.2415 20.1522 12.8357 19.9405C13.4299 19.7289 13.9229 19.6231 14.3147 19.6231C14.7065 19.6231 15.2025 19.7289 15.8028 19.9405C16.4031 20.1522 16.7055 20.4119 16.7099 20.7198C16.7126 20.9121 16.3703 21.3619 15.6829 22.0689C14.9955 22.776 14.5562 23.1295 14.3651 23.1295ZM18.179 19.2191C18.1599 19.2191 17.9671 19.0988 17.6005 18.8583C17.2339 18.6178 16.7455 18.3773 16.1352 18.1368C15.525 17.8963 14.9093 17.7761 14.2882 17.7761C13.667 17.7761 13.0548 17.8963 12.4515 18.1368C11.8481 18.3773 11.369 18.6178 11.0141 18.8583C10.6592 19.0988 10.4675 19.2191 10.4388 19.2191C10.2668 19.2191 9.81487 18.8583 9.08303 18.1368C8.35119 17.4153 7.98403 16.968 7.98154 16.7949C7.97974 16.6698 8.02593 16.5592 8.12011 16.463C8.85481 15.7222 9.78292 15.1402 10.9044 14.717C12.0259 14.2937 13.1361 14.0821 14.2351 14.0821C15.334 14.0821 16.4503 14.2937 17.5839 14.717C18.7176 15.1402 19.6625 15.7222 20.4185 16.463C20.5154 16.5592 20.5648 16.6698 20.5666 16.7949C20.5691 16.968 20.2148 17.4153 19.5037 18.1368C18.7926 18.8583 18.351 19.2191 18.179 19.2191ZM22.0357 15.2942C21.9306 15.2942 21.8201 15.2557 21.7044 15.1787C20.3903 14.1686 19.1755 13.4255 18.0602 12.9493C16.9449 12.4731 15.661 12.2351 14.2085 12.2351C13.3963 12.2351 12.5831 12.3409 11.7692 12.5525C10.9552 12.7641 10.2469 13.0191 9.64443 13.3173C9.04192 13.6155 8.50391 13.9137 8.03041 14.2119C7.55691 14.5101 7.18311 14.7651 6.90904 14.9767C6.63496 15.1883 6.48837 15.2942 6.46926 15.2942C6.30681 15.2942 5.86205 14.9334 5.13499 14.2119C4.40793 13.4904 4.04316 13.0431 4.04067 12.87C4.03901 12.7545 4.08527 12.6487 4.17944 12.5525C5.42256 11.2827 6.93732 10.2967 8.72372 9.5944C10.5101 8.89215 12.3207 8.54103 14.1554 8.54103C15.9901 8.54103 17.8108 8.89215 19.6174 9.5944C21.424 10.2967 22.9671 11.2827 24.2467 12.5525C24.3436 12.6487 24.3929 12.7545 24.3946 12.87C24.3971 13.0431 24.0452 13.4904 23.3389 14.2119C22.6325 14.9334 22.1982 15.2942 22.0357 15.2942ZM25.8639 11.3837C25.7588 11.3837 25.6531 11.3404 25.5467 11.2538C23.8145 9.74351 22.0232 8.60596 20.1727 7.84119C18.3222 7.07641 16.3076 6.69402 14.1288 6.69402C11.9501 6.69402 9.9465 7.07641 8.118 7.84119C6.28949 8.60596 4.53085 9.74351 2.84207 11.2538C2.7382 11.3404 2.63371 11.3837 2.52859 11.3837C2.36614 11.3837 1.919 11.0229 1.18716 10.3015C0.455326 9.57997 0.088163 9.13265 0.0856737 8.95949C0.0838758 8.83444 0.130065 8.72381 0.22424 8.62761C1.98546 6.83832 4.09172 5.45306 6.54301 4.47184C8.99431 3.49061 11.5052 3 14.0757 3C16.6463 3 19.1713 3.49061 21.6508 4.47184C24.1303 5.45306 26.2764 6.83832 28.089 8.62761C28.186 8.72381 28.2354 8.83444 28.2372 8.95949C28.2396 9.13265 27.8853 9.57997 27.1742 10.3015C26.4632 11.0229 26.0264 11.3837 25.8639 11.3837Z'
        fill='white'
      />
      <circle cx='28' cy='2' r='2' fill={state ? '#14FF00' : 'red'} />
    </svg>
  )
}

export default WifiIcon
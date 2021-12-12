import React from 'react'

interface Props {

}

export const DonateCard = (props: Props) => {
  return (
    <div>
      <iframe src="https://yoomoney.ru/quickpay/button-widget?targets=%D0%9F%D0%BE%D0%B4%D0%B0%D1%80%D0%BE%D0%BA&default-sum=100&button-text=13&any-card-payment-type=on&button-size=m&button-color=orange&successURL=&quickpay=small&account=410015638522636&" width="184" height="36" frameBorder="0" allowTransparency={true} scrolling="no"></iframe>
    </div>
  )
}

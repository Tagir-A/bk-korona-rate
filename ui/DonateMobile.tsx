import React from 'react'

interface Props {

}

export const DonateMobile = (props: Props) => {
  return (
    <div>
      <iframe src="https://yoomoney.ru/quickpay/button-widget?targets=%D0%91%D0%B5%D0%B7%D0%B2%D0%BE%D0%B7%D0%BC%D0%B5%D0%B7%D0%B4%D0%BD%D0%BE%D0%B5%20%D0%B4%D0%B0%D1%80%D0%B5%D0%BD%D0%B8%D0%B5&default-sum=50&button-text=13&mobile-payment-type=on&button-size=s&button-color=black&mail=on&successURL=https%3A%2F%2Fbk-korona-rate.vercel.app%2F&quickpay=small&account=410015638522636&" width="127" height="25" frameBorder="0" allowTransparency={true} scrolling="no"></iframe>
    </div>
  )
}

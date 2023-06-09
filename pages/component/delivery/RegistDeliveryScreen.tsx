import { t } from 'i18next'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

import TopLayout from '../TopLayout'
import RegiPosTopLayout from './RegiPosTopLayout'
import RegistStep1 from './RegistStep1'
import RegistStep2 from './RegistStep2'
import RegistStep3 from './RegistStep3'
import RegistStep4 from './RegistStep4'
import RegistStep5 from './RegistStep5'
import RegistStep6 from './RegistStep6'

export interface NationModel {
  search_from: string
  search_fromCode: string
  search_to: string
  search_toCode: string
}

export interface AddressModel {
  name: string
  zipCode: string
  frontAddress: string
  backAddress: string
  frontAddressEn: string
  backAddressEn: string
  telNo: string
  hpNo: string
  email: string
}

const RegistDeliveryScreen = () => {
  const didMount = useRef(false)

  const router = useRouter()

  const [position, setPosition] = useState(4)

  useEffect(() => {
    if (didMount.current) {
      console.log('RegistDeliveryScreen')
    } else {
      didMount.current = true
    }
  }, [])

  const nationModel = useRef<NationModel>({
    search_from: '',
    search_fromCode: '',
    search_to: '',
    search_toCode: '',
  })

  const senderModel = useRef<AddressModel>({
    name: '',
    zipCode: '',
    frontAddress: '',
    backAddress: '',
    frontAddressEn: '',
    backAddressEn: '',
    telNo: '',
    hpNo: '',
    email: '',
  })

  const recipientModel = useRef<AddressModel>({
    name: '',
    zipCode: '',
    frontAddress: '',
    backAddress: '',
    frontAddressEn: '',
    backAddressEn: '',
    telNo: '',
    hpNo: '',
    email: '',
  })

  const itemLists = useRef<any[]>([])

  const goSenderInputStep = (nation: NationModel) => {
    nationModel.current = nation
    setPosition(position + 1)
  }

  const goRevInputStep = (sender: AddressModel) => {
    senderModel.current = sender
    setPosition(position + 1)
  }

  const goItmeInputStep = (recipModel: AddressModel) => {
    recipientModel.current = recipModel
    setPosition(position + 1)
  }

  const goPickupReqStep = (itemList: any[]) => {
    itemLists.current = itemList
    setPosition(position + 1)
  }

  return (
    <div className="h-screen bg-[#f4f4f4] overflow-y-auto">
      <TopLayout
        title={t('qdelivery_create')}
        showRightBtn
        onRightPress={router.back}
      />
      <div className="flex flex-row">
        <RegiPosTopLayout pos={position} />
      </div>

      {position == 1 && (
        <RegistStep1
          nationModel={nationModel.current}
          nextClick={goSenderInputStep}
        />
      )}
      {position == 2 && (
        <RegistStep2
          nationModel={nationModel.current}
          senderModel={senderModel.current}
          nextClick={goRevInputStep}
          prevClick={() => setPosition(1)}
        />
      )}
      {position == 3 && (
        <RegistStep3
          nationModel={nationModel.current}
          recipientModel={recipientModel.current}
          nextClick={goItmeInputStep}
          prevClick={() => setPosition(2)}
        />
      )}
      {position == 4 && (
        <RegistStep4
          nextClick={goPickupReqStep}
          prevClick={() => setPosition(3)}
        />
      )}
      {position == 5 && (
        <RegistStep5
          nextClick={() => console.log('TODO')}
          prevClick={() => setPosition(4)}
        />
      )}
      {position == 6 && <RegistStep6 />}
    </div>
  )
}

export default RegistDeliveryScreen

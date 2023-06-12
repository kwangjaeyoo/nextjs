import { t } from 'i18next'
import Select from 'react-select'

import InputBox from '../InputBox'
import { colourStyles } from '../modal/SelectStyle'

const inputTypeList = [
  { value: 'direct', label: t('direct_input') },
  { value: 'address', label: t('used_my_address_book') },
]

const RegistStep2 = () => {
  const setInputType = (value: any) => {
    if (value.value === 'address') {
      // TODO
      console.log('address, TODO')
    }
  }

  return (
    <>
      <div className="ml-8 font-semi-bold text-[16px]">{t('text_sender')}</div>
      <div
        className="
          flex 
          flex-col
          bg-white
          ml-8
          mr-8
          mt-4
          p-4
          rounded-xl "
      >
        <div className="font-semi-bold text-[16px]">
          {t('select_address_input_type')}
        </div>
        <Select
          className="mt-3"
          styles={colourStyles}
          isSearchable={false}
          defaultValue={inputTypeList[0]}
          options={inputTypeList}
          components={{ IndicatorSeparator: () => null }}
          onChange={setInputType}
        />
      </div>

      <div
        className="
          flex 
          flex-col
          bg-white
          mt-8
          ml-8
          mr-8
          p-4
          rounded-xl "
      >
        <div className="font-semi-bold text-[16px] mb-3">
          {t('origin_country')}
        </div>
        <InputBox placeholder="TODO" disable />

        <div className="flex mt-5 mb-3">
          <div className="font-semi-bold text-[16px]">{t('name')}</div>
          <div
            className="
              mt-1 
              ml-2 
              flex 
              self-center
              w-2
              h-2 
              bg-[#9772D1]
              rounded-full"
          />
        </div>
        <InputBox placeholder="" />

        <div className="flex mt-5 mb-3">
          <div className="font-semi-bold text-[16px]">{t('address')}</div>
          <div
            className="
              mt-1 
              ml-2 
              flex 
              self-center
              w-2
              h-2 
              bg-[#9772D1]
              rounded-full"
          />
        </div>

        <div className="flex flex-row mb-3">
          <InputBox placeholder="" disable />
          <div
            className="
              w-32
              bg-[#9772D1]
              rounded
              ml-2
              flex
              items-center 
              justify-center
              text-white
              "
          >
            {t('search')}
          </div>
        </div>

        <div className="mb-3">
          <InputBox placeholder="" disable />
        </div>
        <InputBox
          placeholder={t('please_check_address_detail_input')}
          onChange={(value) => console.log(value)}
        />

        <div className="flex mt-5 mb-3">
          <div className="font-semi-bold text-[16px]">
            {t('telephone_number')}
          </div>
          <div
            className="
              mt-1 
              ml-2 
              flex 
              self-center
              w-2
              h-2 
              bg-[#9772D1]
              rounded-full"
          />
        </div>
        <InputBox placeholder={''} onChange={(value) => console.log(value)} />

        <div className="flex mt-5 mb-3">
          <div className="font-semi-bold text-[16px]">{t('email_address')}</div>
        </div>
        <InputBox placeholder={''} onChange={(value) => console.log(value)} />
      </div>
    </>
  )
}

export default RegistStep2

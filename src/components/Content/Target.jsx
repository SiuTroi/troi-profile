import React from 'react';
import {AiOutlineFieldTime} from "react-icons/ai"

const Target = ({time}) => {
  return (
    <div className='content'>
      <h1 className='font-bold text-[28px] mb-4'> Mục tiêu</h1>

      <div className='flex flex-col  gap-36'>
        <div>
            <div className="flex gap-4 items-center mb-4">
              <AiOutlineFieldTime className='text-[42px] text-[#db6266]' />
              <h2 className='font-semibold text-[22px]' style={time ? {color: "blue"} : {color: "orange"}}>Thời gian gần và tương lai</h2>
            </div>
            <div className="edu">
              <h6 className='font-semibold text-[18px] translate-y-[-10px] '>Cố gắng làm chủ Javasript</h6>
              <p className='text-sm mt-[-10px]'>2022 - ...</p>
              <p className='mt-4'>Với ước mơ là Fullstack web developer thì javasript là 1 một 
              ngôn ngữ cốt lõi. Nên là làm chủ và hiểu sâu được ngôn ngữ này sẽ là nên tảng tốt nhất
              để học và sử dụng các framework trong tương lai</p>
            </div>
            <div className="edu">
              <h6 className='font-semibold text-[18px] translate-y-[-10px] '>Làm nhiều Project khác nhau</h6>
              <p className='text-sm mt-[-10px]'>2022 - ...</p>
              <p className='mt-4'>Học lý thuyết bao nhiêu sẽ không bao giờ là đủ. Thực hành tạo ra sảm phẩm 
              sẽ giúp bản thân biết được trình độ, kiến thức mình tới đâu</p>
            </div>
            <div className="edu">
              <h6 className='font-semibold text-[18px] translate-y-[-10px] '>Học Tiếng Anh</h6>
              <p className='text-sm mt-[-10px]'>2022 - ...</p>
              <p className='mt-4'>Là 1 ngôn ngữ không thể thiếu trong hiện tại và tương lai. Có tầm quan
                  trọng trong giao tiếp, xin việc làm và cả trong lập trình. Với
                  mục tiêu thông thạo để có thể đọc được tài liệu về Tiếng Anh
                  chuyên ngành.</p>
            </div>
            <div className="edu">
              <h6 className='font-semibold text-[18px] translate-y-[-10px] '>Đi thực tập</h6>
              <p className='text-sm mt-[-10px]'>Unknown</p>
              <p className='mt-4'>Chắc chắn rồi!! Đi thực tập càng sớm sẽ giúp bản thân có cơ hội 
              va chạm và học hỏi được nhiều thứ, môi trường làm việc và mọi người
              cùng ngành, nghề với mình.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Target
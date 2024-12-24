'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useGetTransactionId } from '../../_components/hooks/use-get-transaction-id'
import { useConfirm } from '../../_components/hooks/use-confirm-modal'

const TransactionId =  () => {
    const transactionId = useGetTransactionId()
    const [DeleteModal, handleDelete] = useConfirm({ title: 'Delete Transaction', message: "This action is an inversible. Are you sure?", variant: "destructive" })
    const [ApprovalModal, handleApproval] = useConfirm({title:"Approve Transaction", message: "Are you sure you want to approve this transaction", variant:"success"})
  return (
      <div className='py-12 sm:py-24'>
          <DeleteModal />
          <ApprovalModal />
          <div className="max-w-5xl mx-auto">
              <div className="border p-5 shadow-lg rounded-lg bg-brand-1/10">
                  <div className="flex gap-4 flex-col">
                      <h1 className='font-bold text-2xl sm:text-3xl'>Transaction Id: <span className='font-extrabold'>{ transactionId}</span></h1>
                      <h1 className='font-bold text-2xl sm:text-3xl'>Transaction Date: <span className='font-extrabold'>24/12/2024 12PM</span></h1>
                      <h1 className='font-semibold text-2xl sm:text-3xl'>Transaction Amount: <span className='font-extrabold'>$500.00</span></h1>
                      <h1 className='font-semibold text-2xl sm:text-3xl'>Asset Type: <span className='font-extrabold'>BRET</span></h1>
                      <h1 className='font-semibold text-2xl sm:text-3xl'>UserId: <span className='font-extrabold'>Dxysly213vgmsiuMMsi</span></h1>
                  </div>

                  <Button className='bg-green-500 mt-10 text-white font-extrabold text-2xl p-8' onClick={() => handleApproval()}>Approve Transaction</Button>
              </div>
              <div className="mt-10 border p-5 shadow-lg rounded-lg bg-brand-1/10">
                  <h1 className='font-extrabold text-5xl'>Danger Zone</h1>
                  <p className='text-lg font-semibold'>Irreversible and destructive actions</p>
                  <div className="border border-red-500 p-5 rounded-2xl mt-10">
                      <p className='text-xl font-bold'>Delete Transaction</p>
                      <p className="my-8">Once you delete your user Transaction, there is no going back. Please be certain</p>
                      <Button className='p-5 text-xl' variant={'destructive'} onClick={() => handleDelete()}>Delete Transaction</Button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default TransactionId
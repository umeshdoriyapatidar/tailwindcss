import React from 'react'

function Card(props) {
  return (
    <>
      <div className="flex font-sans mb-6">
        <div className="flex-none w-48 relative">
          <img src="data:image/jpeg;base64,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" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-lg font-semibold text-slate-900">
              {props.channel}
            </h1>
            <div className="text-lg font-semibold text-slate-500">
              {/* {props.myArry[0]} */}
              {props.myArray}
            </div>
            <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
             {/* {props.newObj.name} */}
            </div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div className="space-x-2 flex text-sm">
              <label>
                <input className="sr-only peer" name="size" type="radio" value="xs" checked />
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  XS
                </div>
              </label>
              <label>
                <input className="sr-only peer" name="size" type="radio" value="s" />
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  S
                </div>
              </label>
              <label>
                <input className="sr-only peer" name="size" type="radio" value="m" />
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  M
                </div>
              </label>
              <label>
                <input className="sr-only peer" name="size" type="radio" value="l" />
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  L
                </div>
              </label>
              <label>
                <input className="sr-only peer" name="size" type="radio" value="xl" />
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  XL
                </div>
              </label>
            </div>
          </div>
          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                Buy now
              </button>
              <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                Add to bag
              </button>
            </div>
            <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
              <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-slate-700">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>
    </>
  )
}

export default Card

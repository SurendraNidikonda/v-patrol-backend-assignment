import {useEffect} from 'react'

const PageTitleHook = (count) => {
  useEffect(() => {
    document.title = `Count - ${count}`
  },[count])
}

export default PageTitleHook;

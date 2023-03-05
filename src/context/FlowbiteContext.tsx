import { Flowbite } from "flowbite-react"
import { FC, PropsWithChildren, useEffect, useState } from "react"
import { theme } from "@/theme/theme"

const FlowbiteContext: FC<PropsWithChildren> = function ({ children }) {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted ? <Flowbite theme={{ theme }}>{children}</Flowbite> : <></>
};

export default FlowbiteContext
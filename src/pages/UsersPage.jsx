import { Flex } from "@chakra-ui/react"
import Users from "./Users"


const UsersPage = () => {
  return (
    <Flex
        minWidth="0"
        overflow="auto"
        p="5"
    >
        <Users />
    </Flex>
  )
}

export default UsersPage


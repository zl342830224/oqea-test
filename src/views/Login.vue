<template>
  <form>
    <div>
        <lable>username
            <input>
        </lable>
        <lable>password
            <input>
        </lable>
    </div>
  </form>
</template>

<script>
import { mainStore } from '../store'
export default {
    setup() {
        const login = () => {
            login().then(res => {
                if (res.status === 200) {
                    window.localStorage.setItem("access_token", res.data.token)
                    // set token or user to store
                    mainStore.$patch({ user: user})
                    mainStore.$patch({ access_token: res.data.token})
                    router.push({
                        path: "/"
                    })
                }
            })
        }
    }
}
</script>

<style>

</style>
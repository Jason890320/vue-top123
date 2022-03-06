<script>
export default {

}
</script>

<template>
    <div class="text-xl space-x-16 px-10 py-2 border-b-4">
        <router-link to="home/marketing" class="font-bold" >廣告圖設定</router-link>
        <router-link to="marketing/marquee" class="font-bold text-[#c0ab03]">跑馬燈設定</router-link>
        <router-link to="marketing/banner" class="font-bold">Banner設定</router-link>
    </div>

    <div class="">
        <form action="">
            <div>
                <span>第一句</span><input type="text">
                <button type="submit" class="">儲存</button>
            </div>
            <div>
                <span>第二句</span><input type="text">
                <button type="submit" class="">儲存</button>
            </div>
            <div>
                <span>第塞句</span><input type="text">
                <button type="submit" class="">儲存</button>
            </div>
        </form> 
    </div>
</template>

<style>

</style>
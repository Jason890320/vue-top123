<script>
export default {

}
</script>

<template>
    <div class="text-xl space-x-16 px-10 py-2 border-b-4">
        <router-link to="home/marketing" class="font-bold text-[#c0ab03]" >廣告圖設定</router-link>
        <router-link to="marketing/marquee" class="font-bold ">跑馬燈設定</router-link>
        <router-link to="marketing/banner" class="font-bold">Banner設定</router-link>
    </div>

    <div class="">
        <form action="">
            <div>
            <span>日期</span><input type="date"><span>-</span><input type="date">
            </div>
            <div>
                <span>連結</span><input type="text">
            </div>
            <div>
                <img src="/back_img/logo.png" class="w-15" alt="">
            </div>
            <div>
                <span>※ 廣告圖片尺寸建議1200 x 1100 px </span>
            </div>
            <div>
                <button type="submit" class="">儲存</button>
            </div>
        </form> 
    </div>
</template>

<style>

</style>
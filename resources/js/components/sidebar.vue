<script>
export default {

}
</script>

<template>
    <div class="bg-[#1f1f1f] h-screen w-52 text-white flex flex-col justify-between">
        <div class="p-4 mt-7">
            <img src="/back_img/logo.png" alt="" class="w-15">
        </div>
        <div class="flex flex-col">
            <router-link  to="/home/marketing" class="py-[18px] px-5 hover:bg-neutral-800">行銷</router-link >
            <router-link  to="/home/order" class="py-[18px] px-5 hover:bg-neutral-800">訂單</router-link >
            <router-link  to="/home/blog" class="py-[18px] px-5 hover:bg-neutral-800">日誌</router-link >
            <router-link  to="/home/user" class="py-[18px] px-5 hover:bg-neutral-800">會員</router-link >
            <router-link  to="/home/news" class="py-[18px] px-5 hover:bg-neutral-800">最新消息</router-link >
            <router-link  to="/home/product" class="py-[18px] px-5 hover:bg-neutral-800">商品</router-link >
            <router-link  to="/home/movie" class="py-[18px] px-5 hover:bg-neutral-800">影片</router-link >
            <router-link  to="/home/admin" class="py-[18px] px-5 hover:bg-neutral-800">管理員</router-link >
            <router-link  to="/home/merchant" class="py-[18px] px-5 hover:bg-neutral-800">商家</router-link >
        </div>
        <div class="p-5 mt-28">
            <a href="" type="button" class="w-full text-center border border-neutral-700 text-gray-400 py-2 my-1 bg-[#1f1f1f] hover:bg-yellow-400 hover:text-black duration-500">修改密碼</a>
            <a href="" type="button" class="w-full text-center border border-neutral-700 text-gray-400 py-2 my-1 bg-[#1f1f1f] hover:bg-yellow-400 hover:text-black duration-500">登出</a>
        </div>
    </div>
</template>

<style>

</style>
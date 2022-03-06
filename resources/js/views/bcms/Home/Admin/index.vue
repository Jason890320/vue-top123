<script>
export default {

}
</script>

<template>
    <div class="text-xl px-10 py-2 border-b-4">
        <button class="font-bold text-[#c0ab03]">使用者列表</button>
    </div>

    <div class="flex py-3 px-8 mt-10 justify-between">
        <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="搜尋">
        </div>
        <div class="relative py-2">
            <router-link to="admin/admin_create" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">新增</router-link>
        </div>
    </div>

    <div class="flex flex-col">
        <div class="">
            <div class="py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden shadow-md sm:rounded-lg">
                    <table class="min-w-full">
                        <thead class="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th scope="col" class="py-3 px-6 text-base font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    商家名稱
                                </th>
                                <th scope="col" class="py-3 px-6 text-base font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    姓名
                                </th>
                                <th scope="col" class="py-3 px-6 text-base font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    信箱
                                </th>
                                <th scope="col" class="py-3 px-6 text-base font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    電話
                                </th>
                                <th scope="col" class="py-3 px-6 text-base font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    權限
                                </th>
                                <th scope="col" class="py-3 px-6 text-base font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    啟用
                                </th>
                                
                                <th scope="col" class="relative py-3 px-6">
                                    <span class="sr-only">選項</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td class="py-4 px-6 text-sm text-gray-600 whitespace-nowrap dark:text-gray-400">
                                    資料
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-600 whitespace-nowrap dark:text-white">
                                    資料
                                </td>
                                <td class="py-4 px-6 text-sm text-gray-600 whitespace-nowrap dark:text-gray-400">
                                    資料
                                </td>
                                <td class="py-4 px-6 text-sm text-gray-600 whitespace-nowrap dark:text-gray-400">
                                    資料
                                </td>
                                <td class="py-4 px-6 text-sm text-gray-600 whitespace-nowrap dark:text-gray-400">
                                    資料
                                </td>
                                <td class="py-4 px-6 text-sm text-gray-600 whitespace-nowrap dark:text-gray-400">
                                    資料
                                </td>
                                <!-- <td class="py-4 px-6 text-sm text-gray-600 whitespace-nowrap dark:text-gray-400">
                                    啟用
                                </td>
                                <td class="py-4 px-6 text-sm text-gray-600 whitespace-nowrap dark:text-gray-400">
                                    未啟用
                                </td> -->
                                <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                    <div class="inline-flex">
                                        <a href="" class="bg-[#c0ab03] hover:bg-[#c0ab03]/75 text-gray-50 font-bold py-2 px-4 rounded mx-2">
                                            編輯
                                        </a>
                                        <a href=""  class="bg-red-500 hover:bg-red-400 text-gray-50 font-bold py-2 px-4 rounded ml-2">
                                            刪除
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
</div>
</template>

<style>

</style>
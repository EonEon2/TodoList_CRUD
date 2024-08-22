const IndexPage = () => import('../pages/IndexPage.vue')
const TodoListPage = () => import('../pages/TodoListPage.vue')

const todoRouting = {path: "/todo",
            component: IndexPage, // todo의 하위페이지
            children: [
                {path: "list", component: TodoListPage},
                {path: "", redirect: '/todo/list'}
            ]
        }

export default todoRouting //다른파일에서 todoRouting을 쉽게 import

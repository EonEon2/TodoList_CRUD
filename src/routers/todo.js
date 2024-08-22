const IndexPage = () => import('../pages/todo/IndexPage.vue')
const TodoListPage = () => import('../pages/todo/TodoListPage.vue')
const TodoAddPage = () => import('../pages/todo/TodoAddPage.vue')
const TodoReadPage = () => import('../pages/todo/TodoReadPage.vue')

const todoRouting = {path: "/todo",
            component: IndexPage, // Index가 가장위에있고, 그 아래에 todo list / todoadd가 있는것이다.
            children: [
                {path: "list", component: TodoListPage}, // 실제로는 path: /todo/list, component는 위에 const TodoListPage로 인해서 import연결이 되어있는것.
                {path: "add", component: TodoAddPage},
                {path: "", redirect: '/todo/list'}, // 이것때문에 Indexpage의 가장 기초페이지가 list페이지가 되는것.
                {path: "read/:mno", component: TodoReadPage},
               

                
            ]
        }

export default todoRouting //다른파일에서 todoRouting을 쉽게 import

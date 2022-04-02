/* 

    [Udemy] Javascript Algorithm

    =============================

    Section 2. Performance of Array & Object

    2-3 Array's Big O

    =============================


    < ARRAYS >
    Ordered lists!

    let name = [ "Michael", "Melissa", "Andrea" ];

    let values = [ true, {}, [], 2, "awesome" ];


    < When to use arrays >
    * When you need order
    * When you need fast access / insertion and removal (sort of ...)


    < Big O of Arrays >
    Insertion   = It depends ...
    Removal     = It depends ...
    Searching   = O(N)
    Access      = O(1)
    
    Let's see what we mean by that!


    <참고> Access = O(1)
    엘리먼트가 10000개 있는 배열이 있을 때, 9000번째 엘리먼트를 요청한다면
    자바스크립트는 모든 엘리먼트를 하나씩 지나가면서 9000번까지 세다가
    원하는 엘리먼트에 도착했을 때 값을 주는 것이 아니다.
    엘리먼트마다 바로 갈 수 있는 지름길이 있다고 생각하면 된다.
    실제로 배열 안에 존재하는 인덱스인가? 있다면 그 데이터에 바로 접근 가능
    따라서, 배열의 길이나 접근하려는 아이템의 순서(처음에 있는지, 중간에 있는지, 끝에 있는지)는 중요X
    let name = [ "Michael", "Melissa", "Andrea" ];
        "Michael"   "Melissa"   "Andrea"
            0           1           2

    <참고> Insertion, Removal
    정렬과 깊은 관계가 있다.
    Insertion(입력) : 어디에 입력하는지에 달려있다. 
    위의 name 배열에 대해서
    Raj 라는 이름을 배열 끝에 추가(push) 한다면 객체에 추가하는 것과 다를바 없이 간단하다.
    => O(1) (상수시간)
    배열 앞에 추가(push) 하려고 한다면 인덱스때문에 복잡해진다.
    Michael 은 더이상 0번째가 아니고, Mellisa 와 Andrea 또한 마찬가지이므로
    배열의 엘리먼트마다 인덱스를 새로 배정해야 한다.
    => O(N)   (중간에 넣는다고해도 O(2/N) 는 결국 O(N))

    Removal(삭제) : 어떤 인덱스의 값을 삭제하는지에 달려있다.
    입력과 같이, 뒤의 것을 삭제하는 것은 간단하지만,
    앞의 것을 삭제하면 같은 문제가 발생한다. 인덱스를 다시 배정해야 한다.

    * (결론) *
    앞에 추가/삭제 하는 것은 끝에 추가/삭제 하는 것보다 비효율적이다
    shift, unshift 보다 push, pop 작업이 더 빠르다 (비어있는 배열일 경우 제외. 이 경우, 앞이던 뒤던 동일)



    < Big O of Array Operations > 빅오 배열 메서드 (don't need to know all) 거의 다 O(N)
    * push      = O(1)
    * pop       = O(1)
    * shift     = O(N)
    * unshift   = O(N)
    * concat    = O(N)
    * slice     = O(N)
    * splice    = O(N)
    * sort      = O(N * logN)
    * forEach/map/filter/reduce/etc)    = O(N)

    push, pop : 끝에 추가했다 삭제했다만 하면 되므로 간단  => O(1) constant time
    shift, unshift : 중간에 끼워넣게된다면 모든 요소의 인덱스를 다시 정해줘야 함  => O(N) linear time
    concat, slice, splice : 일반적으로 배열과 관련된 작업들은 O(N)
        - concat : 여러 배열을 합쳐준다
            O(N) 와 O(M) 을 합치는 경우, 걸리는 시간이 사실상 O(N+M) 이라고 할 수 있겠지만, O(N) 이라고 표현하는 것으로 충분 (늘 그렇다시피)
            let array1 = ['a', b', 'c']
            let array2 = ['d', 'e', 'f']
            console.log(array1.concat(array2)) // expected output : Array ['a', 'b', 'c', 'd', 'e', 'f']
        - slice : 배열 일부 (또는 전체)를 가져온다
            let desserts = ['cake', 'cookie', 'pie', 'candy', 'pudding']
            console.log(desserts.slice(2))  // expected output : Array ['pie', 'candy', 'pudding]
            console.log(desserts.slice(2,4))    // expected output : Array ['pie', 'candy']
            console.log(desserts.slice(1,5))    // expected output : Array ['cookie', 'pie', 'candy', 'pudding']
        - splice : 엘리먼트를 제거/추가
            shift, unshift 와 같이 중간에 추가했을 경우 뒤의 인덱스들 재정리
            let months = ['Jan', 'March', 'April', 'June']
            months.splice(1, 0, 'Feb')  // inserts at 1st index position
            console.log(months)         // expected output : Array ['Jan', 'Feb', 'March', 'April', 'June']
            months.splice(4, 1, 'May')  // replace 1 element at 4th index
            console.log(months)         // expected output : Array ['Jan', 'Feb', 'March', 'April', 'May']
    sort: 추후 정렬에 대한 알고리즘 (6~7가지) 에 대해 자세히 다룸. 지금 당장은 '배열을 정렬 하는 것은 O(N) 보다 더 크다 (=더 느리다)' 는 것만 알고 있기
        값을 비교하고 엘리먼트 이동하고 정렬하려면 모든 엘리먼트를 순회하며 보는 것만으로 충분하지 않아 더 복잡하다
    forEach, map, filter, reduce, etc : 모두 O(N)
                                        엘리먼트마나 한 가지 작업(개수 기록, boolean 으로 확인, 출력 등)을 실행하기 때문


*/
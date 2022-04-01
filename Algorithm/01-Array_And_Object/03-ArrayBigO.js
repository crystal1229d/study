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
    => O(N) 

    Removal(삭제) : 어떤 인덱스의 값을 삭제하는지에 달려있다.
    입력과 같이, 뒤의 것을 삭제하는 것은 간단하지만,
    앞의 것을 삭제하면 같은 문제가 발생한다. 인덱스를 다시 배정해야 한다.

    * (결론) *
    앞에 추가/삭제 하는 것은 끝에 추가/삭제 하는 것보다 비효율적이다
    shift, unshift 보다 push, pop 작업이 더 빠르다 (비어있는 배열일 경우 제외. 이 경우, 앞이던 뒤던 동일)



*/
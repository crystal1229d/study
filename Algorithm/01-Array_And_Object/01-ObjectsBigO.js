/* 

    [Udemy] Javascript Algorithm

    =============================

    Section 2. Performance of Array & Object

    2-1 Object's Big O

    =============================


    < OBJECTS >
    Unordered, key-value pairs!

    let instructor = {
        firstName: "Keyll",
        isInstructor: true,
        favoriteNumbers: [ 1,2,3,4 ]
    }
    // => 이 객체 리터럴에는 instructor 라는 변수에 key value 3개를 저장하고 있다


    < When to use objects >
    * When you don't need order
    * When you need fast access / insertion and removal (Quick!)
        -> Quick, 즉 빠르다는 것은 입력, 제거, 접근하는 시간이 상수 시간이라는 것 (아래 참조)

    
    < Big O of Objects >
    Insertion   = O(1)
    Removal     = O(1)
    Searching   = O(N)   * searching means 'not looking for KEY but VALUE'  * searching takes LINEAR TIME
    Access      = O(1)
    when you don't need any ordering, objects are an excellent choice!

    <참고> 왜 Searching, 탐색(키 탐색X, 값 탐색)만 빅오가 O(N) 일까?
    어떤 값이 객체의 어느 키에 있는지 찾기 위해서는 외부에서는 알 수 없고, 잠재적으로 모든 키의 값을 검사해야하기 때문.
    따라서 객체 리터럴의 모든 key (N개) 를 검사해야만 한다
    예를 들어 위의 instructor 객체 리터럴을 검사한다고 했을때, 키를 하나하나 돌며 검사
        ◼︎           ◼︎               ◼︎
    firstName   isInstructor    favoriteNumbers


    < Big O of Object Methods >
    Object.keys     = O(N)
    Object.values   = O(N)
    Object.entries  = O(N)
    hasOwnProperty  = O(1)


*/
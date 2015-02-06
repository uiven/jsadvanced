MyBlogApp.controller(
    "BlogController",
    function BlogController($scope) {
        $scope.SortOrder = "-Followers"
       // $scope.Count = "Followers"
        $scope.BlogCategory = {
            Name: "Asp.net",
            CreatedDate: '5/1/15',
           // Count:"Followers",
            //SortOrder:'-LikeCount',
            Time: '12:00 AM',
            Posts: [
                {
                    Title: "How to use code Blocks",
                    By: "Venk",
                    Intro: "Register for OTN’s FREE Virtual Technology Summit, February 11th for a technology webcast event which will showcase how to get the most out of Java wherever it is: from the largest servers to the tiniest devices. Learn how to improve the compatibility and security of large applications, how to work with Maven, HTML5, and JavaScript and how to get started with IoT, wearables, and more",
                    Logo: "chek.jpeg",
                    LikeCount: 3,
                    Followers:3 

                },
                {
                    Title: "How to use chaee Blocks",
                    By: "Venk1",
                    Intro: "If you think that you can't afford coverage, you might be surprised. Check out your plan options now! Last chance to enroll is 2/15.If you think that you cant afford coverage, you might be surprised. Check out your plan options now! Last chance to enroll is 2/15.",
                    Logo: "buid.jpeg",
                    LikeCount: 5,
                    Followers: 5

                },
                 {
                     Title: "wor to use code Blocks",
                     By: "Venk2",
                     Intro: "If you think that you can't afford coverage, you might be surprised. Check out your plan options now! Last chance to enroll is 2/15.Register for OTN’s FREE Virtual Technology Summit, February 11th for a technology webcast event which will showcase how to get the most out of Java wherever it is: from the largest servers to the tiniest devices. Learn how to improve the compatibility and security of large applications, how to work with Maven, HTML5, and JavaScript and how to get started with IoT, wearables, and more",
                     Logo: "chek.jpeg",
                     LikeCount: 8,
                     Followers: 8

                 },
                 {
                     Title: "whenw to use code Blocks",
                     By: "Venk3",
                     Intro: "Register for OTN’s FREE Virtual Technology Summit, February 11th for a technology webcast eventIf you think that you can't afford coverage, you might be surprised. Check out your plan options now! Last chance to enroll is 2/15. which will showcase how to get the most out of Java wherever it is: from the largest servers to the tiniest devices. Learn how to improve the compatibility and security of large applications, how to work with Maven, HTML5, and JavaScript and how to get started with IoT, wearables, and more",
                     Logo: "buid.jpeg",
                     LikeCount: 9,
                     Followers:9



                 }

            ]
        }
        $scope.Click_Like = function (post) {
            post.LikeCount++;
            post.Followers++;

        }
        $scope.Click_UnLike = function (post) {
            post.LikeCount--;
            post.Followers--;
        }
        $scope.data = "ven";
        //$scope.data1 = $sce.trustAsHtml("<script>alert('hi')");
        $scope.btn_click = function () {
            alert($scope.data);
        }

    });
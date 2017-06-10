/**
 * Created by hadoh on 6/8/2016.
 */

// angular.module("registerApp", [])
angular.module("newpost", ['ngFileUpload'])
    .controller("newpostCtrl",['$scope', 'Upload', '$http', '$timeout', function ($scope, Upload, $http, $timeout) { //regCtrl
        $scope.person = {}; // will contain title, email, password, channels, hearFromUs
        $scope.titleInvalid = false;

        $scope.priceInvalid = false;
        $scope.descriptionInvalid = false;

        $scope.emailInvalid = false;
        $scope.passwordInvalid = false;
        $scope.researchInvalid = false;
        $scope.regionsInvalid = false;
        $scope.hearFromUsInvalid = false; // agreement
        $scope.doShow = false;

        //-----------------------------------------------
        // 9-5
        // this is latest function uploadPic()
        // it actually send  multiple image files and other field like title, email  to server
        //------------------------------------------------
        //  $scope.picFile = picFile;

            $scope.uploadPic = function (files) {
                $scope.files = files;
                // $scope.title = title; // <-- dont do assign to title here either !!!
                // $scope.errFiles = errFiles;
                // data: {title: $scope.title};

                if (files && files.length) {
                    Upload.upload({
                        //url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                        url: './newpost2',
                        data: {
                            // title: $scope.title, // I Add <-- this is RIGHT !!!
                            title: $scope.person.title,
                            price: $scope.person.price,
                            description: $scope.person.description,
                            email: $scope.person.email,
                            password: $scope.person.password,
                            subcategory: $scope.person.channel,
                            region: $scope.person.region,
                            //subcategory: $scope.person.channels,
                            //region: $scope.person.regions,

                            files: files
                        }
                    }).then(function (response) {
                        $timeout(function () {
                            $scope.result = response.data;
                        });
                    }, function (response) {
                        if (response.status > 0) {
                            $scope.errorMsg = response.status + ': ' + response.data;
                        }
                    }, function (evt) {
                        $scope.progress =
                            Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                    });
                }
            };
        
            $scope.person.channels = [
                { value: "1", label: "software" },
                { value: "2", label: "accounting" },
                { value: "3", label: "business" },
                { value: "4", label: "apartment" },
                { value: "5", label: "office"},
                { value: "6", label: "vacation_rental"},
                { value: "7", label: "jewelry" },
                { value: "8", label: "household"},
                { value: "9", label: "electronics"}
            ];
            
        $scope.person.channel = "";
// $scope.selected = $scope.items[0];
        $scope.person.regions = [
            { value: "1", label: "san francisco" },
            { value: "2", label: "LA" },
            { value: "3", label: "washington" },
            { value: "4", label: "paris" },
            { value: "5", label: "rome"},
            { value: "6", label: "london"},
            { value: "7", label: "saigon" },
            { value: "8", label: "tokyo"},
            { value: "9", label: "delhi"}
        ];
        
         $scope.person.region = "";
// $scope.person.region = scope.person.regions[0];
        $scope.person.hearFromUs = true; // false;

        mytimestampz = new Date().toISOString().slice(0, 19).replace('T', ' ');
        $scope.mytimestamp = mytimestampz;

        $scope.register =  function(){  // register variable of $scope is defined as a function()
          
            if ( (!$scope.registrationForm.title.$valid))     {
                $scope.titleInvalid = true;
            }
            if(!$scope.registrationForm.price.$valid){
                $scope.priceInvalid = true;
            }
            if(!$scope.registrationForm.description.$valid){
                $scope.descriptionInvalid = true;
            }
            if(!$scope.registrationForm.email.$valid){
                $scope.emailInvalid = true;
            }
            if(!$scope.registrationForm.password.$valid){
                $scope.passwordInvalid = true;
            }
            if(!$scope.registrationForm.hearFromUs.$valid){
                $scope.hearFromUsInvalid = true;
            }
            if(!$scope.registrationForm.channels.$valid){
                $scope.researchInvalid = true;
            }
            if(!$scope.registrationForm.regions.$valid){
                $scope.regionsInvalid = true;
            }
        };
    }
    ]
    );


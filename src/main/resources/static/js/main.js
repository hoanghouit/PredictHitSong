function Song(date, title, artist, position) {
    this.date = date;
    this.title = title;
    this.artist = artist;
    this.position = position;
    this.id = "";
    this.duration_ms = "";
    this.tempo = "";
    this.time_signature = "";
    this.mode = "";
    this.key = "";
    this.loudness = "";
    this.danceability = "";
    this.energy = "";

    this.beatdiff_mean = "";
    this.beatdiff_variance = "";
    this.beatdiff_skewness = "";
    this.beatdiff_kurtosis = "";
    this.beatdiff_standard_deviation = "";
    this.beatdiff_80th_percentile = "";
    this.beatdiff_min = "";
    this.beatdiff_max = "";
    this.beatdiff_range = "";
    this.beatdiff_median = "";

    this.timebre_1_mean = "";
    this.timebre_1_variance = "";
    this.timebre_1_skewness = "";
    this.timebre_1_kurtosis = "";
    this.timebre_1_standard_deviation = "";
    this.timebre_1_80th_percentile = "";
    this.timebre_1_min = "";
    this.timebre_1_max = "";
    this.timebre_1_range = "";
    this.timebre_1_median = "";

    this.timebre_2_mean = "";
    this.timebre_2_variance = "";
    this.timebre_2_skewness = "";
    this.timebre_2_kurtosis = "";
    this.timebre_2_standard_deviation = "";
    this.timebre_2_80th_percentile = "";
    this.timebre_2_min = "";
    this.timebre_2_max = "";
    this.timebre_2_range = "";
    this.timebre_2_median = "";

    this.timebre_3_mean = "";
    this.timebre_3_variance = "";
    this.timebre_3_skewness = "";
    this.timebre_3_kurtosis = "";
    this.timebre_3_standard_deviation = "";
    this.timebre_3_80th_percentile = "";
    this.timebre_3_min = "";
    this.timebre_3_max = "";
    this.timebre_3_range = "";
    this.timebre_3_median = "";

    this.timebre_4_mean = "";
    this.timebre_4_variance = "";
    this.timebre_4_skewness = "";
    this.timebre_4_kurtosis = "";
    this.timebre_4_standard_deviation = "";
    this.timebre_4_80th_percentile = "";
    this.timebre_4_min = "";
    this.timebre_4_max = "";
    this.timebre_4_range = "";
    this.timebre_4_median = "";

    this.timebre_5_mean = "";
    this.timebre_5_variance = "";
    this.timebre_5_skewness = "";
    this.timebre_5_kurtosis = "";
    this.timebre_5_standard_deviation = "";
    this.timebre_5_80th_percentile = "";
    this.timebre_5_min = "";
    this.timebre_5_max = "";
    this.timebre_5_range = "";
    this.timebre_5_median = "";

    this.timebre_6_mean = "";
    this.timebre_6_variance = "";
    this.timebre_6_skewness = "";
    this.timebre_6_kurtosis = "";
    this.timebre_6_standard_deviation = "";
    this.timebre_6_80th_percentile = "";
    this.timebre_6_min = "";
    this.timebre_6_max = "";
    this.timebre_6_range = "";
    this.timebre_6_median = "";

    this.timebre_7_mean = "";
    this.timebre_7_variance = "";
    this.timebre_7_skewness = "";
    this.timebre_7_kurtosis = "";
    this.timebre_7_standard_deviation = "";
    this.timebre_7_80th_percentile = "";
    this.timebre_7_min = "";
    this.timebre_7_max = "";
    this.timebre_7_range = "";
    this.timebre_7_median = "";

    this.timebre_8_mean = "";
    this.timebre_8_variance = "";
    this.timebre_8_skewness = "";
    this.timebre_8_kurtosis = "";
    this.timebre_8_standard_deviation = "";
    this.timebre_8_80th_percentile = "";
    this.timebre_8_min = "";
    this.timebre_8_max = "";
    this.timebre_8_range = "";
    this.timebre_8_median = "";

    this.timebre_9_mean = "";
    this.timebre_9_variance = "";
    this.timebre_9_skewness = "";
    this.timebre_9_kurtosis = "";
    this.timebre_9_standard_deviation = "";
    this.timebre_9_80th_percentile = "";
    this.timebre_9_min = "";
    this.timebre_9_max = "";
    this.timebre_9_range = "";
    this.timebre_9_median = "";

    this.timebre_10_mean = "";
    this.timebre_10_variance = "";
    this.timebre_10_skewness = "";
    this.timebre_10_kurtosis = "";
    this.timebre_10_standard_deviation = "";
    this.timebre_10_80th_percentile = "";
    this.timebre_10_min = "";
    this.timebre_10_max = "";
    this.timebre_10_range = "";
    this.timebre_10_median = "";

    this.timebre_11_mean = "";
    this.timebre_11_variance = "";
    this.timebre_11_skewness = "";
    this.timebre_11_kurtosis = "";
    this.timebre_11_standard_deviation = "";
    this.timebre_11_80th_percentile = "";
    this.timebre_11_min = "";
    this.timebre_11_max = "";
    this.timebre_11_range = "";
    this.timebre_11_median = "";

    this.timebre_12_mean = "";
    this.timebre_12_variance = "";
    this.timebre_12_skewness = "";
    this.timebre_12_kurtosis = "";
    this.timebre_12_standard_deviation = "";
    this.timebre_12_80th_percentile = "";
    this.timebre_12_min = "";
    this.timebre_12_max = "";
    this.timebre_12_range = "";
    this.timebre_12_median = "";

}

var songs = [];
var m = 0;
var data = [];
var dataResult = [];
var n = 1;
var songs_end= [];
var songs_offical = {};
var check_done = 0;
var number_of_url = 0;
var titles = [];

// Call API:https://api.spotify.com/v1/search?q=track%3ALac%20troi%20artist%3ASon%20Tung%20MTP&type=track
// let token = "BQAWqIiiiEfDqoqqAq1AJib59HOlsVLE5__dXcPvQlnfYpoN6B1kQI2CgKy6wezO9zv0w_RiWcc6wrih_lplxI_XyLMiJf2ilLo5WJqz-BXzpnm-pxiFmbmLVoCsZ6a-8to3iFVWIvBuhhEgt985iAkc2hBtfyUbg2XZgqL6qPrE6KUTRIcGIY0cb__CMPZNQ1sZi45D_lc3_nV53y5I-4WEWaorZ_t4Py8tuBw7yfK05mP5hAuVWtY3l0tSzi2Z3wTKU8Sx5DPes13iCw6digL8VxYKmYRq";
// let Authorization = "Bearer " + token;
let Authorization = "";
//Get song(title. artist, peak_position)
function getData(urls, date_str) {
    // Nhaccuatui.com
    // $.get(url,function (response) {
    //         var json = $.parseHTML(response);
    //         json.forEach(function(element) {
    //             if (element.className=="box-content")
    //             {
    //                 var a=element.childNodes[3].childNodes[1].childNodes[1].childNodes[11].childNodes[3].childNodes[1].childNodes;
    //                 // console.log(a);
    //                 a.forEach(function (elemen1) {
    //                     if(elemen1.childNodes.length > 0){
    //                         var posotion = elemen1.childNodes[1].textContent; // Postion
    //                         var title = elemen1.childNodes[5].childNodes[3].childNodes[0].textContent;//title
    //                         // console.log(elemen1.childNodes[5].childNodes[5].childNodes)
    //                         var b = elemen1.childNodes[5].childNodes[5].childNodes;
    //                         var artist = '';
    //                         b.forEach(function (element2) {
    //                             if(element2.textContent == ', ')
    //                                 artist += ' OR ';
    //                             else
    //                                 artist += element2.textContent;
    //
    //                         });
    //                         var song =  new Song;
    //                         song.title = title;
    //                         song.position=posotion;
    //                         song.artist=artist;
    //                         songs.push(song);
    //
    //                     }
    //
    //                 });
    //                 check_done +=1;
    //                 if (check_done == 2) {
    //                     var result = CSV(songs);
    //                     exportFile(result, "DataInput.csv");
    //                     console.log("----------DONE------------");
    //                 }
    //
    //
    //
    //             }})
    //
    //     });
    //officialcharts.com
    $.get(urls,function (response) {
        var json = $.parseHTML(response);
        var n=0;
        var day = date_str.substr(6,2);
        var month = date_str.substr(4,2);
        var year = date_str.substr(0,4);
        var date_date =  new Date(year,month,day);
        json.forEach(function(element) {
            if (element.id=="container") {
                var a=element.childNodes[7].childNodes[9].childNodes[1].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes;
                a.forEach(function (elemen1) {

                    if(elemen1.childNodes.length > 0 && elemen1.className =="" && elemen1.childNodes[1].childNodes[1]){
                        var posotion = elemen1.childNodes[1].childNodes[1].textContent; //posotion
                        if (isNaN(parseInt(posotion))) {
                            return;
                        }
                        var title = elemen1.childNodes[5].childNodes[1].childNodes[3].childNodes[1].childNodes[1].textContent;//title
                        var artist = elemen1.childNodes[5].childNodes[1].childNodes[3].childNodes[3].childNodes[1].textContent;//artist
                        while(artist.includes(" FT ")){
                            artist= artist.replace(" FT ", " OR ");
                        }

                        while(artist.includes(" / ")){
                            artist = artist.replace(" / ", " OR ");
                        }

                        while(artist.includes("/")){
                            artist = artist.replace("/", " OR ");
                        }

                        while(artist.includes(" & ")){
                            artist = artist.replace(" & ", " OR ");
                        }

                        while(artist.includes(" FEATURING ")){
                            artist = artist.replace(" FEATURING ", " OR ");
                        }

                        if (title.includes("(")){
                            var pos = title.indexOf("(");
                            var title_re = title.substr(pos);
                            title = title.replace(title_re," ");
                        }

                        var song =  new Song(date_date,title.trim(),artist.trim(),posotion);
                        if(!titles.includes(song.title))
                        {
                            titles.push(title);
                            songs_offical[title]=song;
                        }
                        else {
                            if(parseInt(posotion) < parseInt(songs_offical[title].position)){
                                songs_offical[title].position=posotion;
                                songs_offical[title].date=date_date;
                            }
                        }
                    }
                });
                console.log("Processing............");
                check_done +=1;
                if (check_done === number_of_url) {
                    for(var i in songs_offical) {
                        songs.push(songs_offical[i]);
                    }
                    songs.sort(function (song1, song2) {
                        return song1.date - song2.date;
                    });

                    // data = results.data;
                    songs.forEach(function (song) {
                        if (song.date) {
                            GetId(song);
                        }
                    });
                    console.log(songs_end);
                    var result = CSV(songs_end);
                    exportFile(result, "DataInput.csv");
                    console.log("----------DONE------------");
                }
            }
        })

    });
}

// send Get ID
function GetId(song) {
    // return new Promise(resolve => {
        var linkRequest = "https://api.spotify.com/v1/search?q=track:" + song.title + " artist:" + song.artist + "&type=track";
        var xhttp = new XMLHttpRequest();
        function reqListener() {
            // resolve(JSON.parse(this.responseText));
            if (this.readyState === 4 && this.status === 200) {
                var parsedData = JSON.parse(this.responseText);
                if (parsedData.tracks.items.length > 0) {
                    console.log(n++);
                    song.id = parsedData.tracks.items[0].id;
                    if (song.id){
                        GetFeatures(song);
                        GetAnalysis(song);
                        GetArtistPopularity(song);
                    }
                    else {
                        return 0;
                    }
                }

            } else {
                return 0;
            }
        }
        xhttp.addEventListener("load", reqListener);
        xhttp.open("GET", linkRequest, false);
        xhttp.setRequestHeader("Authorization", Authorization);
        xhttp.send();
    // });

}


// Get a Track by Call API: https://api.spotify.com/v1/tracks/{id}
// Get popularity
function GetArtistPopularity(song) {
    // return new Promise(resolve => {
    var linkRequest = "https://api.spotify.com/v1/tracks/" + song.id;
    var xhttp = new XMLHttpRequest();
    function reqListener() {
        if (this.readyState === 4 && this.status === 200) {
            var parsedData = JSON.parse(this.responseText);

            var artist_popularity =0;
            parsedData.artists.forEach(function (artist) {
                GetArtist(artist);
                var popularity = artist.popularity;
                if(popularity > artist_popularity){
                    artist_popularity = popularity;
                }
            });
            song.artist_popularity = artist_popularity;
        } else {

        }
    }
    xhttp.addEventListener("load", reqListener);
    xhttp.open("GET", linkRequest, false);
    xhttp.setRequestHeader("Authorization", Authorization);
    xhttp.send();
}

// Call API: https://api.spotify.com/v1/artists/{id}
// Get artists for a Track
function GetArtist(artist) {
    // return new Promise(resolve => {
    var linkRequest = "https://api.spotify.com/v1/artists/" + artist.id;
    var xhttp = new XMLHttpRequest();
    function reqListener() {
        if (this.readyState === 4 && this.status === 200) {
            var parsedData = JSON.parse(this.responseText);
            artist.popularity = parsedData.popularity;
        } else {

        }
    }
    xhttp.addEventListener("load", reqListener);
    xhttp.open("GET", linkRequest, false);
    xhttp.setRequestHeader("Authorization", Authorization);
    xhttp.send();
}

// Call API: https://api.spotify.com/v1/audio-features/{id}
// Get Audio Features for a Track
function GetFeatures(song) {
    // return new Promise(resolve => {
        var linkRequest = "https://api.spotify.com/v1/audio-features/" + song.id;
        var xhttp = new XMLHttpRequest();
        function reqListener() {
            if (this.readyState === 4 && this.status === 200) {
                var parsedData = JSON.parse(this.responseText);
                song.duration_ms = parsedData.duration_ms;
                song.tempo = parsedData.tempo;
                song.time_signature = parsedData.time_signature;
                song.mode = parsedData.mode;
                song.key = parsedData.key;
                song.loudness = parsedData.loudness;
                song.danceability = parsedData.danceability;
                song.energy = parsedData.energy;
                song.speechiness = parsedData.speechiness;
                song.acousticness = parsedData.acousticness;
                song.instrumentalness = parsedData.instrumentalness;
                song.liveness = parsedData.liveness;
                song.valence = parsedData.valence;


            } else {

            }
        }
        xhttp.addEventListener("load", reqListener);
        xhttp.open("GET", linkRequest, false);
        xhttp.setRequestHeader("Authorization", Authorization);
        xhttp.send();
}

// Call API: https://api.spotify.com/v1/audio-analysis/{id}
// Get Audio Analysis for a Track
function GetAnalysis(song) {
    // return new Promise(resolve => {
        var linkRequest = "https://api.spotify.com/v1/audio-analysis/" + song.id;
        var xhttp = new XMLHttpRequest({async:false});
        var no_push = false;
        function reqListener() {

            if (m<5){
                if (this.status === 504) {
                    m++;
                    no_push = true;
                    GetAnalysis(song);
                }
            }
            else {
                m=0;
            }


            if (this.readyState === 4 && this.status === 200) {
                var parsedData = JSON.parse(this.responseText);
                var duration_arr = [];
                var timebre1_arr = [];
                var timebre2_arr = [];
                var timebre3_arr = [];
                var timebre4_arr = [];
                var timebre5_arr = [];
                var timebre6_arr = [];
                var timebre7_arr = [];
                var timebre8_arr = [];
                var timebre9_arr = [];
                var timebre10_arr = [];
                var timebre11_arr = [];
                var timebre12_arr = [];


                parsedData.beats.forEach(function (beat) {
                    duration_arr.push(beat.duration);
                });

                parsedData.segments.forEach(function (segment) {
                    timebre1_arr.push(segment.timbre[0]);
                    timebre2_arr.push(segment.timbre[1]);
                    timebre3_arr.push(segment.timbre[2]);
                    timebre4_arr.push(segment.timbre[3]);
                    timebre5_arr.push(segment.timbre[4]);
                    timebre6_arr.push(segment.timbre[5]);
                    timebre7_arr.push(segment.timbre[6]);
                    timebre8_arr.push(segment.timbre[7]);
                    timebre9_arr.push(segment.timbre[8]);
                    timebre10_arr.push(segment.timbre[9]);
                    timebre11_arr.push(segment.timbre[10]);
                    timebre12_arr.push(segment.timbre[11]);
                });

                song.beatdiff_mean = mean(duration_arr);
                song.beatdiff_variance = variance(duration_arr);
                song.beatdiff_skewness = sampleSkewness(duration_arr);
                song.beatdiff_kurtosis = sampleKurtosis(duration_arr);
                song.beatdiff_standard_deviation = standardDeviation(duration_arr);
                song.beatdiff_80th_percentile = quantile(duration_arr, 0.8);
                song.beatdiff_min = min(duration_arr);
                song.beatdiff_max = max(duration_arr);
                song.beatdiff_range = song.beatdiff_max - song.beatdiff_min;
                song.beatdiff_median = median(duration_arr);

                song.timebre_1_mean = mean(timebre1_arr);
                song.timebre_1_variance = variance(timebre1_arr);
                song.timebre_1_skewness = sampleSkewness(timebre1_arr);
                song.timebre_1_kurtosis = sampleKurtosis(timebre1_arr);
                song.timebre_1_standard_deviation = standardDeviation(timebre1_arr);
                song.timebre_1_80th_percentile = quantile(timebre1_arr, 0.8);
                song.timebre_1_min = min(timebre1_arr);
                song.timebre_1_max = max(timebre1_arr);
                song.timebre_1_range = song.timebre_1_max - song.timebre_1_min;
                song.timebre_1_median = median(timebre1_arr);

                song.timebre_2_mean = mean(timebre2_arr);
                song.timebre_2_variance = variance(timebre2_arr);
                song.timebre_2_skewness = sampleSkewness(timebre2_arr);
                song.timebre_2_kurtosis = sampleKurtosis(timebre2_arr);
                song.timebre_2_standard_deviation = standardDeviation(timebre2_arr);
                song.timebre_2_80th_percentile = quantile(timebre2_arr, 0.8);
                song.timebre_2_min = min(timebre2_arr);
                song.timebre_2_max = max(timebre2_arr);
                song.timebre_2_range = song.timebre_2_max - song.timebre_2_min;
                song.timebre_2_median = median(timebre2_arr);

                song.timebre_3_mean = mean(timebre3_arr);
                song.timebre_3_variance = variance(timebre3_arr);
                song.timebre_3_skewness = sampleSkewness(timebre3_arr);
                song.timebre_3_kurtosis = sampleKurtosis(timebre3_arr);
                song.timebre_3_standard_deviation = standardDeviation(timebre3_arr);
                song.timebre_3_80th_percentile = quantile(timebre3_arr, 0.8);
                song.timebre_3_min = min(timebre3_arr);
                song.timebre_3_max = max(timebre3_arr);
                song.timebre_3_range = song.timebre_3_max - song.timebre_3_min;
                song.timebre_3_median = median(timebre3_arr);

                song.timebre_4_mean = mean(timebre4_arr);
                song.timebre_4_variance = variance(timebre4_arr);
                song.timebre_4_skewness = sampleSkewness(timebre4_arr);
                song.timebre_4_kurtosis = sampleKurtosis(timebre4_arr);
                song.timebre_4_standard_deviation = standardDeviation(timebre4_arr);
                song.timebre_4_80th_percentile = quantile(timebre4_arr, 0.8);
                song.timebre_4_min = min(timebre4_arr);
                song.timebre_4_max = max(timebre4_arr);
                song.timebre_4_range = song.timebre_4_max - song.timebre_4_min;
                song.timebre_4_median = median(timebre4_arr);

                song.timebre_5_mean = mean(timebre5_arr);
                song.timebre_5_variance = variance(timebre5_arr);
                song.timebre_5_skewness = sampleSkewness(timebre5_arr);
                song.timebre_5_kurtosis = sampleKurtosis(timebre5_arr);
                song.timebre_5_standard_deviation = standardDeviation(timebre5_arr);
                song.timebre_5_80th_percentile = quantile(timebre5_arr, 0.8);
                song.timebre_5_min = min(timebre5_arr);
                song.timebre_5_max = max(timebre5_arr);
                song.timebre_5_range = song.timebre_5_max - song.timebre_5_min;
                song.timebre_5_median = median(timebre5_arr);

                song.timebre_6_mean = mean(timebre6_arr);
                song.timebre_6_variance = variance(timebre6_arr);
                song.timebre_6_skewness = sampleSkewness(timebre6_arr);
                song.timebre_6_kurtosis = sampleKurtosis(timebre6_arr);
                song.timebre_6_standard_deviation = standardDeviation(timebre6_arr);
                song.timebre_6_80th_percentile = quantile(timebre6_arr, 0.8);
                song.timebre_6_min = min(timebre6_arr);
                song.timebre_6_max = max(timebre6_arr);
                song.timebre_6_range = song.timebre_6_max - song.timebre_6_min;
                song.timebre_6_median = median(timebre6_arr);

                song.timebre_7_mean = mean(timebre7_arr);
                song.timebre_7_variance = variance(timebre7_arr);
                song.timebre_7_skewness = sampleSkewness(timebre7_arr);
                song.timebre_7_kurtosis = sampleKurtosis(timebre7_arr);
                song.timebre_7_standard_deviation = standardDeviation(timebre7_arr);
                song.timebre_7_80th_percentile = quantile(timebre7_arr, 0.8);
                song.timebre_7_min = min(timebre7_arr);
                song.timebre_7_max = max(timebre7_arr);
                song.timebre_7_range = song.timebre_7_max - song.timebre_7_min;
                song.timebre_7_median = median(timebre7_arr);

                song.timebre_8_mean = mean(timebre8_arr);
                song.timebre_8_variance = variance(timebre8_arr);
                song.timebre_8_skewness = sampleSkewness(timebre8_arr);
                song.timebre_8_kurtosis = sampleKurtosis(timebre8_arr);
                song.timebre_8_standard_deviation = standardDeviation(timebre8_arr);
                song.timebre_8_80th_percentile = quantile(timebre8_arr, 0.8);
                song.timebre_8_min = min(timebre8_arr);
                song.timebre_8_max = max(timebre8_arr);
                song.timebre_8_range = song.timebre_8_max - song.timebre_8_min;
                song.timebre_8_median = median(timebre8_arr);

                song.timebre_9_mean = mean(timebre9_arr);
                song.timebre_9_variance = variance(timebre9_arr);
                song.timebre_9_skewness = sampleSkewness(timebre9_arr);
                song.timebre_9_kurtosis = sampleKurtosis(timebre9_arr);
                song.timebre_9_standard_deviation = standardDeviation(timebre9_arr);
                song.timebre_9_80th_percentile = quantile(timebre9_arr, 0.8);
                song.timebre_9_min = min(timebre9_arr);
                song.timebre_9_max = max(timebre9_arr);
                song.timebre_9_range = song.timebre_9_max - song.timebre_9_min;
                song.timebre_9_median = median(timebre9_arr);

                song.timebre_10_mean = mean(timebre10_arr);
                song.timebre_10_variance = variance(timebre10_arr);
                song.timebre_10_skewness = sampleSkewness(timebre10_arr);
                song.timebre_10_kurtosis = sampleKurtosis(timebre10_arr);
                song.timebre_10_standard_deviation = standardDeviation(timebre10_arr);
                song.timebre_10_80th_percentile = quantile(timebre10_arr, 0.8);
                song.timebre_10_min = min(timebre10_arr);
                song.timebre_10_max = max(timebre10_arr);
                song.timebre_10_range = song.timebre_10_max - song.timebre_10_min;
                song.timebre_10_median = median(timebre10_arr);

                song.timebre_11_mean = mean(timebre11_arr);
                song.timebre_11_variance = variance(timebre11_arr);
                song.timebre_11_skewness = sampleSkewness(timebre11_arr);
                song.timebre_11_kurtosis = sampleKurtosis(timebre11_arr);
                song.timebre_11_standard_deviation = standardDeviation(timebre11_arr);
                song.timebre_11_80th_percentile = quantile(timebre11_arr, 0.8);
                song.timebre_11_min = min(timebre11_arr);
                song.timebre_11_max = max(timebre11_arr);
                song.timebre_11_range = song.timebre_11_max - song.timebre_11_min;
                song.timebre_11_median = median(timebre11_arr);

                song.timebre_12_mean = mean(timebre12_arr);
                song.timebre_12_variance = variance(timebre12_arr);
                song.timebre_12_skewness = sampleSkewness(timebre12_arr);
                song.timebre_12_kurtosis = sampleKurtosis(timebre12_arr);
                song.timebre_12_standard_deviation = standardDeviation(timebre12_arr);
                song.timebre_12_80th_percentile = quantile(timebre12_arr, 0.8);
                song.timebre_12_min = min(timebre12_arr);
                song.timebre_12_max = max(timebre12_arr);
                song.timebre_12_range = song.timebre_12_max - song.timebre_12_min;
                song.timebre_12_median = median(timebre12_arr);
            } else {

            }
        }
        xhttp.addEventListener("load", reqListener);
        xhttp.open("GET", linkRequest, false);
        xhttp.setRequestHeader("Authorization", Authorization);
        xhttp.send();
        if (!no_push && song.timebre_1_80th_percentile && song.timebre_2_80th_percentile){
            songs_end.push(song);
        }

}


function handleFileSelect(evt) {
    var file = evt.target.files[0];

    Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            data = results.data;
            data.forEach(function (song) {
                if (song.date) {

                    GetId(song);


                }
            });
            var result = CSV(songs);
            exportFile(result, "data.csv");
            console.log("----------DONE------------");
        }
    });
}

function CSV(songs) {
    var empConnects = [];
    songs.forEach(function (song) {
        empConnects.push([
            "\"" + song.date + "\"",
            "\"" + song.title + "\"",
            "\"" + song.artist + "\"",
            "\"" + song.position + "\"",
            "\"" + song.id + "\"",
            "\"" + song.artist_popularity + "\"",
            "\"" + song.speechiness + "\"",
            "\"" + song.acousticness + "\"",
            "\"" + song.instrumentalness + "\"",
            "\"" + song.liveness + "\"",
            "\"" + song.valence + "\"",
            "\"" + song.duration_ms + "\"",
            "\"" + song.tempo + "\"",
            "\"" + song.time_signature + "\"",
            "\"" + song.mode + "\"",
            "\"" + song.key + "\"",
            "\"" + song.loudness + "\"",
            "\"" + song.danceability + "\"",
            "\"" + song.energy + "\"",
            "\"" + song.beatdiff_mean + "\"",
            "\"" + song.beatdiff_variance + "\"",
            "\"" + song.beatdiff_skewness + "\"",
            "\"" + song.beatdiff_kurtosis + "\"",
            "\"" + song.beatdiff_standard_deviation + "\"",
            "\"" + song.beatdiff_80th_percentile + "\"",
            "\"" + song.beatdiff_min + "\"",
            "\"" + song.beatdiff_max + "\"",
            "\"" + song.beatdiff_range + "\"",
            "\"" + song.beatdiff_median + "\"",
            "\"" + song.timebre_1_mean + "\"",
            "\"" + song.timebre_1_variance + "\"",
            "\"" + song.timebre_1_skewness + "\"",
            "\"" + song.timebre_1_kurtosis + "\"",
            "\"" + song.timebre_1_standard_deviation + "\"",
            "\"" + song.timebre_1_80th_percentile + "\"",
            "\"" + song.timebre_1_min + "\"",
            "\"" + song.timebre_1_max + "\"",
            "\"" + song.timebre_1_range + "\"",
            "\"" + song.timebre_1_median + "\"",
            "\"" + song.timebre_2_mean + "\"",
            "\"" + song.timebre_2_variance + "\"",
            "\"" + song.timebre_2_skewness + "\"",
            "\"" + song.timebre_2_kurtosis + "\"",
            "\"" + song.timebre_2_standard_deviation + "\"",
            "\"" + song.timebre_2_80th_percentile + "\"",
            "\"" + song.timebre_2_min + "\"",
            "\"" + song.timebre_2_max + "\"",
            "\"" + song.timebre_2_range + "\"",
            "\"" + song.timebre_2_median + "\"",
            "\"" + song.timebre_3_mean + "\"",
            "\"" + song.timebre_3_variance + "\"",
            "\"" + song.timebre_3_skewness + "\"",
            "\"" + song.timebre_3_kurtosis + "\"",
            "\"" + song.timebre_3_standard_deviation + "\"",
            "\"" + song.timebre_3_80th_percentile + "\"",
            "\"" + song.timebre_3_min + "\"",
            "\"" + song.timebre_3_max + "\"",
            "\"" + song.timebre_3_range + "\"",
            "\"" + song.timebre_3_median + "\"",
            "\"" + song.timebre_4_mean + "\"",
            "\"" + song.timebre_4_variance + "\"",
            "\"" + song.timebre_4_skewness + "\"",
            "\"" + song.timebre_4_kurtosis + "\"",
            "\"" + song.timebre_4_standard_deviation + "\"",
            "\"" + song.timebre_4_80th_percentile + "\"",
            "\"" + song.timebre_4_min + "\"",
            "\"" + song.timebre_4_max + "\"",
            "\"" + song.timebre_4_range + "\"",
            "\"" + song.timebre_4_median + "\"",
            "\"" + song.timebre_5_mean + "\"",
            "\"" + song.timebre_5_variance + "\"",
            "\"" + song.timebre_5_skewness + "\"",
            "\"" + song.timebre_5_kurtosis + "\"",
            "\"" + song.timebre_5_standard_deviation + "\"",
            "\"" + song.timebre_5_80th_percentile + "\"",
            "\"" + song.timebre_5_min + "\"",
            "\"" + song.timebre_5_max + "\"",
            "\"" + song.timebre_5_range + "\"",
            "\"" + song.timebre_5_median + "\"",
            "\"" + song.timebre_6_mean + "\"",
            "\"" + song.timebre_6_variance + "\"",
            "\"" + song.timebre_6_skewness + "\"",
            "\"" + song.timebre_6_kurtosis + "\"",
            "\"" + song.timebre_6_standard_deviation + "\"",
            "\"" + song.timebre_6_80th_percentile + "\"",
            "\"" + song.timebre_6_min + "\"",
            "\"" + song.timebre_6_max + "\"",
            "\"" + song.timebre_6_range + "\"",
            "\"" + song.timebre_6_median + "\"",
            "\"" + song.timebre_7_mean + "\"",
            "\"" + song.timebre_7_variance + "\"",
            "\"" + song.timebre_7_skewness + "\"",
            "\"" + song.timebre_7_kurtosis + "\"",
            "\"" + song.timebre_7_standard_deviation + "\"",
            "\"" + song.timebre_7_80th_percentile + "\"",
            "\"" + song.timebre_7_min + "\"",
            "\"" + song.timebre_7_max + "\"",
            "\"" + song.timebre_7_range + "\"",
            "\"" + song.timebre_7_median + "\"",
            "\"" + song.timebre_8_mean + "\"",
            "\"" + song.timebre_8_variance + "\"",
            "\"" + song.timebre_8_skewness + "\"",
            "\"" + song.timebre_8_kurtosis + "\"",
            "\"" + song.timebre_8_standard_deviation + "\"",
            "\"" + song.timebre_8_80th_percentile + "\"",
            "\"" + song.timebre_8_min + "\"",
            "\"" + song.timebre_8_max + "\"",
            "\"" + song.timebre_8_range + "\"",
            "\"" + song.timebre_8_median + "\"",
            "\"" + song.timebre_9_mean + "\"",
            "\"" + song.timebre_9_variance + "\"",
            "\"" + song.timebre_9_skewness + "\"",
            "\"" + song.timebre_9_kurtosis + "\"",
            "\"" + song.timebre_9_standard_deviation + "\"",
            "\"" + song.timebre_9_80th_percentile + "\"",
            "\"" + song.timebre_9_min + "\"",
            "\"" + song.timebre_9_max + "\"",
            "\"" + song.timebre_9_range + "\"",
            "\"" + song.timebre_9_median + "\"",
            "\"" + song.timebre_10_mean + "\"",
            "\"" + song.timebre_10_variance + "\"",
            "\"" + song.timebre_10_skewness + "\"",
            "\"" + song.timebre_10_kurtosis + "\"",
            "\"" + song.timebre_10_standard_deviation + "\"",
            "\"" + song.timebre_10_80th_percentile + "\"",
            "\"" + song.timebre_10_min + "\"",
            "\"" + song.timebre_10_max + "\"",
            "\"" + song.timebre_10_range + "\"",
            "\"" + song.timebre_10_median + "\"",
            "\"" + song.timebre_11_mean + "\"",
            "\"" + song.timebre_11_variance + "\"",
            "\"" + song.timebre_11_skewness + "\"",
            "\"" + song.timebre_11_kurtosis + "\"",
            "\"" + song.timebre_11_standard_deviation + "\"",
            "\"" + song.timebre_11_80th_percentile + "\"",
            "\"" + song.timebre_11_min + "\"",
            "\"" + song.timebre_11_max + "\"",
            "\"" + song.timebre_11_range + "\"",
            "\"" + song.timebre_11_median + "\"",
            "\"" + song.timebre_12_mean + "\"",
            "\"" + song.timebre_12_variance + "\"",
            "\"" + song.timebre_12_skewness + "\"",
            "\"" + song.timebre_12_kurtosis + "\"",
            "\"" + song.timebre_12_standard_deviation + "\"",
            "\"" + song.timebre_12_80th_percentile + "\"",
            "\"" + song.timebre_12_min + "\"",
            "\"" + song.timebre_12_max + "\"",
            "\"" + song.timebre_12_range + "\"",
            "\"" + song.timebre_12_median + "\""
        ]);
    });
    if (empConnects.length < 1) {
        console.log("no data");
        return;
    }
    var csvContent = "data:text/csv;charset=utf-8,%EF%BB%BF";
    csvContent = "";
    empConnects.forEach(function (infoArray, index) {
        dataString = infoArray.join(",");
        csvContent += index < empConnects.length ? dataString : dataString;
        csvContent += "\n";
    });

    return csvContent;

}


function callApi() {
    console.log(11111111);
    var input = {
        "trainUrl":"data://toanhda/data/train.arff",
        "cv":5,
        "options":"",
        "mode":"train",
        "modelUrl":"data://toanhda/data/modela.txt"
    };
    Algorithmia.client("sim51Yh5DuG0nVUPaQ7XOTGDoje1")
        .algo("weka/NaiveBayes/0.1.1")
        .pipe(input)
        .then(function(output) {
            console.log(output);
        });


    // var input = ["data://toanhda/data/occ-dance-012013-062018-weaa.csv", "data://toanhda/data/occ-dance-012013-062018-weka.arff"];
    // Algorithmia.client("simm33AE+ef9ZhFNMmLlF6Mn9ti1")
    //     .algo("weka/CsvToArff/0.1.1")
    //     .pipe(input)
    //     .then(function(output) {
    //         console.log(output);
    //     });
}

function exportFile(data, filename) {

    if (!data) {
        console.error('Console.save: No data');
        return;
    }

    if (!filename) filename = 'console.json';

    if (typeof data === "object") {
        data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {type: 'text/json'}),
        e = document.createEvent('MouseEvents'),
        a = document.createElement('a');

    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e)
}

$(document).ready(function () {
    // $("#csv-file").change(handleFileSelect);
    $( "#submit" ).click(function() {
        var from_date = $( "#from-date" ).val();
        var to_date = $( "#to-date" ).val();
        var first_url = $( "#first-url" ).val();
        var end_url = $( "#end-url" ).val();
        var token = $( "#token" ).val();
        Authorization = "Bearer " + token;
        var url_global='http://www.officialcharts.com/charts/r-and-b-singles-chart/';
        // var date = year+month+day;
        // from_date = from_date.Date("yyyy-MM-dd");
        var date_from_new = new Date(from_date);
        var date_to_new = new Date(to_date);
        $.ajaxPrefilter( function (options) {
            if (options.crossDomain && jQuery.support.cors) {
                var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
                options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
                //options.url = "http://cors.corsproxy.io/url=" + options.url;
            }
        });
        while (date_from_new<=date_to_new){
            var day = date_from_new.getDate();
            var month = date_from_new.getMonth() +1 ;
            var year = date_from_new.getFullYear();
            var day_str = day.toString();
            var month_str = month.toString();
            var year_str = year.toString();
            if (day<10){
                day_str = "0"+day_str;
            }
            if(month<10){
                month_str = "0"+ month_str;
            }
            date_from_new.setDate(day+7);
            var date_str = year_str+ month_str+ day_str;
            var url='http://www.officialcharts.com/charts/'+first_url+'/'+date_str+'/'+end_url+'/';

            console.log("Week!");
            number_of_url +=1;
            getData(url, date_str);
        }
    });

    $("#callapi").click(function () {
        callApi();
    });
});

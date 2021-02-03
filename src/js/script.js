var debug;
$(document).ready(function(){
	$('.slideshow ul').bxSlider({
		mode: "fade",
		auto: true,
		controls: false
	});

	if($(window).width() > 767){
		$('ul.teams').bxSlider({
			mode: "horizontal",
			pager: false,
			auto: false,
			minSlides: 1,
			maxSlides: 3,
			moveSlides: 1,
			slideWidth: 340,
			slideMargin: 30
		});
	}

	$(".box-tabs").tabs();

	$(".datepicker").datepicker();
	$(".select2").select2({
		minimumResultsForSearch: -1,
		// placeholder: function(){
	 //        $(this).data('placeholder');
	 //    }
	});

	// responsive table
	if($(window).width() <= 768){
		$("table").each(function(){

			var el = $(this);
			$(this).find("tbody tr").each(function(){

				var idx = 0;
				$(this).find("td").each(function(){
					$(this).prepend("<span>"+$(el).find("thead th").eq(idx).html()+":</span>")
					idx++;
				});
			});

		});
	}

	$(".table").DataTable();
	$(".login-btn").on('click', function(e){
		e.preventDefault();
		
		$.colorbox({
			html: $(".login-popup").html()
		})
	});

	var ctx = document.getElementById('myChart');
	if($("#myChart").length > 0 && chart_data.length > 0){

		var labels = [],
			datas = [],
			colors = [],
			result = [],
			total_data_in_dataset = 4,
			cur_dataset = 1;

		// init
		chart_data.map((item, i) => {
			labels.push(item.name)
			datas.push(item.value)
			colors.push("#"+item.color)

			// write legends
			$("ul.graph-legend").append('<li><div class="legend-color" style="background-color: #'+item.color+';"></div><p>'+item.name+'</p></li>')
		})

		datas = [];
		chart_data.map((item, i) => {
			// console.log(i)
			datas.push(item.value)

			if( (((i+1) % (total_data_in_dataset) == 0) || (i == chart_data.length-1)) && (i > 0)){

				// insert zero values to outside data
				for(var x = 0; x < (i-(total_data_in_dataset-1)); x++){
					datas.splice(x, 0, 0)
				}
				for(var y = (i+1); y < (chart_data.length); y++){
					datas.push(0)
				}

				// insert to final result
				result.push({
					data: datas,
		            backgroundColor: colors,
		        })

				// reset
				console.log('dataset'+cur_dataset)
				console.log(datas)
				datas = [];

				cur_dataset++;
			}
		})

		debug = result

		var myChart = new Chart(ctx, {
		    type: 'pie',
		    data: {
		        labels: labels,
		        datasets: result
		    },
		    options: {
		    	legend: false
		    }
		});
	}

})
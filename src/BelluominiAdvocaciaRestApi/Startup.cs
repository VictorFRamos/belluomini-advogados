using Swashbuckle.AspNetCore.SwaggerUI;

namespace BelluominiAdvocaciaRestApi;

public class Startup
{
    public Startup(IConfiguration configuration) => Configuration = configuration;

    public IConfiguration Configuration { get; }
    // This method gets called by the runtime. Use this method to add services to the container
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddControllers();
        services.AddCors(options =>
        {
            options.AddDefaultPolicy(policy =>
            {
                policy.WithOrigins("*")
                      .AllowAnyHeader()
                      .AllowAnyMethod();
            });
        });

    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }

        app.UseHttpsRedirection();

        app.UseCors();

        app.UseRouting();

        app.UseAuthentication();
        app.UseAuthorization();

        app.UseSwagger();
        app.UseSwaggerUI();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
            endpoints.MapGet("/", async context =>
            {
                context.Response.Redirect("/swagger");
            });
        });

        app.Use(async (context, next) =>
        {
            try
            {
                await next();
            }
            catch (Exception e)
            {
                context.RequestServices.GetService<ILogger<Startup>>()?.LogError(e, "Error");
                await context.Response.WriteAsync(e.ToString());
            }

            context.Response.OnStarting(() =>
            {
                context.Response.Headers["X-Forwarded-For"] = "true";
                return Task.CompletedTask;
            });
        });

        app.UseForwardedHeaders();


    }
}